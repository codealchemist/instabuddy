const mongojs = require('mongojs')

const localConnectionString = 'mongodb://localhost:27017/instabuddy'
const connectionString = process.env.MONGODB_CONNECTION_STRING || localConnectionString
const db = mongojs(connectionString)
const collection = db.collection('channels')

class Channel {
  constructor (collection) {
    this.collection = collection
  }

  list () {

  }

  get (name, callback) {
    this.collection.find({name}, callback)
  }

  update (channel) {

  }

  create (channel) {

  }

  addButton ({channel, id, name, src}, callback) {
    console.log('DB: ADD BUTTON', {channel, id, name, src})
    this.collection.update(
      {name: channel},
      {
        $set: { updated: new Date() },
        $push: { buttons: {id, name, src} }
      },
      callback
    )
  }
}

const channel = new Channel(collection)
module.exports = channel
