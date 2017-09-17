const mongojs = require('mongojs')
const channelModel = require('./models/channel')

function getChannel ({broadcast, send, ws, message}) {
  const name = message.name
  channelModel.get(name, (err, data) => {
    if (err) {
      console.error('MONGO ERR:', err)
      send(ws, {type: 'error', err})
      return
    }

    console.log(`CHANNEL '${name}':`, data[0])
    send(ws, {type: 'channel', data: data[0]})
  })
}

module.exports = { getChannel }
