const db = require('./__db')

function log () {
  console.log('[ Channel ]', ...arguments)
}

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
    log(`Save: ${channel}`)
    if (!channel) return
    this.collection.save(channel, callback)
  }

  create (name, callback) {
    name = name.trim()
    log(`Create: ${name}`)
    if (!name) return
    this.collection.save({
      name,
      created: new Date(),
      updated: new Date(),
      buttons: []
    }, callback)
  }

  reset (channel, callback) {
    log(`Reset: ${channel}`)
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
    log('Add button:', { channel, id, name, src })
    if (!channel) return
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
    log('Remove button:', { channel, id })
    if (!channel) return
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
    log('Get button:', { channel, buttonId })
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
    log('Get button by name:', { channel, buttonName })
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
    log(`Get random button on channel: ${name}`)
    this.collection.aggregate([
      { $match: { name } },
      { $unwind: "$buttons" },
      { $sample: { size: 1 } }
    ], callback)
  }
}

const channel = new Channel()
module.exports = channel
