const channelModel = require('./models/channel')

async function getChannel ({broadcast, send, ws, message}) { // Made async
  const name = message.name;
  try {
    const channels = await channelModel.get(name); // Use await
    if (channels && channels.length > 0) {
      const channel = channels[0];
      console.log(`CHANNEL '${name}':`, channel);
      send(ws, {type: 'channel', data: channel});
    } else {
      console.log(`CHANNEL '${name}' not found.`);
      send(ws, {type: 'channel', data: null}); // Or send an error
    }
  } catch (err) {
    console.error(`MONGO ERR getting channel '${name}':`, err);
    send(ws, {type: 'error', message: 'Error fetching channel data.', details: err.message });
  }
}

async function removeButton ({broadcast, send, ws, message}) { // Made async
  const {channel, id} = message;
  console.log(`REMOVE BUTTON: ${id} @ ${channel}`);
  try {
    await channelModel.removeButton({channel, id}); // Use await
    console.log(`BUTTON REMOVED Successfully: ${id} @ ${channel}`);
    // Optionally, broadcast an update or send confirmation to the client
    // send(ws, {type: 'buttonRemoved', data: {channel, id}});
    // broadcast(ws, {type: 'buttonRemovedBroadcast', data: {channel, id}}); // If others need to know
  } catch (err) {
    console.error(`Error removing button ${id} from channel ${channel}:`, err);
    // send(ws, {type: 'error', message: 'Error removing button.', details: err.message });
  }
}

async function playRandom ({broadcast, send, ws, message}) { // Made async
  if (!message.channel) {
    console.log('ERROR: Invalid data for "playRandom" event:', message);
    return;
  }

  const {channel} = message;
  console.log(`Getting RANDOM button @${channel}...`);
  try {
    const button = await channelModel.getRandomButton(channel); // Use await
    if (button) {
      console.log('GOT RANDOM button:', button);
      const outgoingMessage = { // Renamed to avoid conflict with outer `message`
        type: 'play',
        data: {
          channel,
          src: button.src,
          id: button.id
        }
      };
      broadcast(ws, outgoingMessage);
    } else {
      console.log(`No buttons found in channel '${channel}' to play randomly.`);
      // Optionally send a message back to the user if no button found
      // send(ws, {type: 'info', message: 'No buttons available to play randomly.'});
    }
  } catch (err) {
    console.log(`ERROR getting random button on channel '${channel}':`, err);
    // send(ws, {type: 'error', message: 'Error getting random button.', details: err.message });
  }
}

async function play ({broadcast, send, ws, message}) { // Made async, though only inner part needs it for await
  if (
    !message.data ||
    !message.data.channel ||
    !message.data.src ||
    !message.data.id
  ) {
    console.log('ERROR: Invalid data for "play" event:', message);
    return;
  }
  console.log(`PLAY @${message.data.channel}:`, message.data.src);

  // Get source URL.
  const {channel, src, id} = message.data;
  if (src.match(/^blob:/)) { // Ensure blob check is correct, e.g. blob:http...
    console.log('GET BUTTON real src...');
    try {
      // channelModel.getButton now returns the channel doc with the button in buttons array if found
      const channelDocWithButton = await channelModel.getButton({channel, buttonId: id}); // Use await

      if (!channelDocWithButton || !channelDocWithButton.buttons || channelDocWithButton.buttons.length === 0) {
        console.log(`BUTTON for remote play NOT FOUND or channelDoc error: @${channel} / ${id}. Response:`, channelDocWithButton);
        // send(ws, {type: 'error', message: `Button ${id} not found in channel ${channel}.`});
        return;
      }

      // Instant button found. Use this src on broadcast.
      console.log('GOT BUTTON for remote play', channelDocWithButton);
      const button = channelDocWithButton.buttons[0]; // Matched button is the first (and only) in the array

      // Create a new message object for broadcasting to avoid mutating the original if it's reused
      const broadcastMessage = {
        ...message,
        data: {
          ...message.data,
          src: button.src // Update only the src
        }
      };
      broadcast(ws, broadcastMessage);
    } catch (err) {
      console.log(`ERROR getting button '${id}' for remote play:`, err);
      // send(ws, {type: 'error', message: 'Error retrieving button details.', details: err.message});
    }
    return;
  }

  // Already got proper URL, broadcast.
  broadcast(ws, message);
}

module.exports = { getChannel, removeButton, play, playRandom };
