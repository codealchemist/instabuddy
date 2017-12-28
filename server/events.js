const channelModel = require('./models/channel')

function getChannel ({broadcast, send, ws, message}) {
  const name = message.name
  channelModel.get(name, (err, data) => {
    if (err) {
      console.error('MONGO ERR:', err)
      send(ws, {type: 'error', err})
      return
    }

    const channel = data[0]
    console.log(`CHANNEL '${name}':`, channel)
    send(ws, {type: 'channel', data: channel})
  })
}

function removeButton ({broadcast, send, ws, message}) {
  const {channel, id} = message
  console.log(`REMOVE BUTTON: ${id} @ ${channel}`)
  channelModel.removeButton({channel, id}, () => {
    console.log(`BUTTON REMOVED Successfully: ${id} @ ${channel}`)
  })
}

function playRandom ({broadcast, send, ws, message}) {
  if (!message.channel) {
    console.log('ERROR: Invalid data for "playRandom" event:', message)
    return
  }

  const {channel} = message
  console.log(`Getting RANDOM button @${channel}...`)
  channelModel.getRandomButton(channel, (err, response) => {
    if (err) {
      console.log(`ERROR getting random button on channel '${channel}':`, err)
      return
    }

    // console.log('RESPONSE', response)
    const button = response[0].buttons
    console.log('GOT RANDOM button:', button)
    const message = {
      type: 'play',
      data: {
        channel,
        src: button.src,
        id: button.id
      }
    }
    broadcast(ws, message)
  })
}

function play ({broadcast, send, ws, message}) {
  if (
    !message.data ||
    !message.data.channel ||
    !message.data.src ||
    !message.data.id
  ) {
    console.log('ERROR: Invalid data for "play" event:', message)
    return
  }
  console.log(`PLAY @${message.data.channel}:`, message.data.src)

  // Get source URL.
  const {channel, src, id} = message.data
  if (src.match(/^blob/)) {
    console.log('GET BUTTON real src...')
    channelModel.getButton({channel, buttonId: id}, (err, response) => {
      if (err) {
        console.log(`ERROR getting button '${id}' for remote play:`, err)
        return
      }

      if (!response) {
        console.log(`Unable to get button '${id}' @${channel}`)
        return
      }

      const buttons = response.buttons

      // Empty.
      if (!buttons || !buttons.length) {
        console.log(`BUTTON for remote play NOT FOUND: @${channel} / ${id}`)
        return
      }

      // Instant button found. Use this src on broadcast.
      console.log('GOT BUTTON for remote play', response)
      const button = buttons[0]
      message.data.src = button.src
      broadcast(ws, message)
    })
    return
  }

  // Already got proper URL, broadcast.
  broadcast(ws, message)
}

module.exports = { getChannel, removeButton, play, playRandom }
