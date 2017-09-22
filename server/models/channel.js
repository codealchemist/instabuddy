const db = require('./__db')

class Channel {
  constructor () {
    this.collection = db.collection('channels')
  }

  list () {

  }

  get (name, callback) {
    this.collection.find({name}, callback)
  }

  save (channel) {
    if (!channel) return
    this.collection.save(channel, callback)
  }

  create (name, callback) {
    name = name.trim()
    if (!name) return
    this.collection.save({
      name,
      created: new Date(),
      updated: new Date()
    }, callback)
  }

  reset (channel, callback) {
    if (!channel) return
    this.collection.update(
      {name: channel},
      {
        $set: {
          updated: new Date(),
          buttons: []
        }
      },
      callback
    )
  }

  addButton ({channel, id, name, src}, callback) {
    if (!channel) return
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

const channel = new Channel()
module.exports = channel
