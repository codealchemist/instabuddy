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

const channel = new Channel()
module.exports = channel
