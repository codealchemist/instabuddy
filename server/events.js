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

module.exports = { getChannel }
