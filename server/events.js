const mongojs = require('mongojs')

const localConnectionString = 'mongodb://localhost:27017/instabuddy'
const connectionString = process.env.MONGODB_CONNECTION_STRING || localConnectionString
const db = mongojs(connectionString)
const channelsCollection = db.collection('channels')

function getChannel ({broadcast, send, ws, message}) {
  const name = message.name
  channelsCollection.find({name}, (err, data) => {
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
