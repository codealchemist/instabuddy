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

function play ({broadcast, send, ws, message}) {
  console.log(`PLAY @${message.channel}:`, message.src)
  broadcast(ws, message)
}

module.exports = { getChannel, removeButton, play }
