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
      updated: new Date(),
      buttons: []
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

  removeButton ({channel, id}, callback) {
    if (!channel) return
    console.log('DB: REMOVE BUTTON', {channel, id})
    this.collection.update(
      {name: channel},
      {
        $set: { updated: new Date() },
        $pull: { buttons: {id: id.toString()} },
      },
      { multi: true },
      callback
    )
  }

  getButton ({channel, buttonId}, callback) {
    if (!channel || !buttonId) return

    this.collection.findOne(
      { name: channel.toString() },
      {
        buttons: {
          $elemMatch: {id: buttonId.toString()}
        }
      },
      callback
    )
  }

  getButtonByName ({channel, buttonName}, callback) {
    if (!channel || !buttonName) return

    this.collection.findOne(
      { name: channel.toString() },
      {
        buttons: {
          $elemMatch: {name: buttonName}
        }
      },
      callback
    )
  }

  getRandomButton (name, callback) {
    this.collection.aggregate([
      { $match: { name } },
      { $unwind: "$buttons" },
      { $sample: { size: 1 } }
    ], callback)
  }
}

const channel = new Channel()
module.exports = channel
