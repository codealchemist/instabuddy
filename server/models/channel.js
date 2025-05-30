const { getDb, ObjectId } = require('./__db'); // Updated import

function log () {
  console.log('[ Channel ]', ...arguments)
}

class Channel {
  constructor () {
    // Collection is now accessed via getDb()
    // this.collection can be set in each method or once if getDb() is guaranteed to be ready
  }

  _getCollection() {
    return getDb().collection('channels');
  }

  async list () {
    log('List all channels');
    try {
      return await this._getCollection().find({}).toArray();
    } catch (error) {
      log('Error listing channels:', error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }

  async get (name) {
    log(`Get channel: ${name}`);
    return this._getCollection().find({ name }).toArray();
  }

  // The original save method was not used and its direct equivalent is complex.
  // It's better to use explicit insertOne or updateOne/replaceOne.
  // async save (channelData) {
  //   log(`Save: ${channelData && channelData.name}`);
  //   if (!channelData) return null;
  //   // This is a simplified upsert, assumes _id is present for updates
  //   // or relies on MongoDB to generate _id for new documents.
  //   // A more robust save would check for _id and use updateOne or insertOne.
  //   const idToQuery = channelData._id ? new ObjectId(channelData._id) : new ObjectId();
  //   return this._getCollection().replaceOne({ _id: idToQuery }, channelData, { upsert: true });
  // }

  async create (name) {
    name = name.trim();
    log(`Create: ${name}`);
    if (!name) {
      // Consider throwing an error or returning a more specific error object
      console.error('Channel name cannot be empty for create');
      return null;
    }
    const newChannel = {
      name,
      created: new Date(),
      updated: new Date(),
      buttons: []
    };
    try {
      const result = await this._getCollection().insertOne(newChannel);
      // result.insertedId will contain the _id of the new channel
      return result; // Or specifically return result.insertedId or newChannel including _id
    } catch (error) {
      log(`Error creating channel ${name}:`, error);
      // Handle duplicate name error (index on 'name' field would cause E11000)
      if (error.code === 11000) {
        console.error(`Channel with name "${name}" already exists.`);
        // Depending on requirements, could return the existing channel or a specific error
        return { error: 'Channel already exists', existingChannelName: name };
      }
      throw error; // Re-throw other errors
    }
  }

  async reset (channelName) {
    log(`Reset: ${channelName}`);
    if (!channelName) return null;
    return this._getCollection().updateOne(
      { name: channelName },
      {
        $set: {
          updated: new Date(),
          buttons: []
        }
      }
    );
  }

  async addButton ({ channel, id, name, src }) {
    log('Add button:', { channel, id, name, src });
    if (!channel) return null;
    return this._getCollection().updateOne(
      { name: channel },
      {
        $set: { updated: new Date() },
        $push: { buttons: { id, name, src } }
      }
    );
  }

  async removeButton ({ channel, id }) {
    log('Remove button:', { channel, id });
    if (!channel) return null;
    // mongojs's {multi: true} is default for updateMany, but for unique channel name, updateOne is fine.
    // $pull removes all instances matching the criteria from the array.
    return this._getCollection().updateOne(
      { name: channel },
      {
        $set: { updated: new Date() },
        $pull: { buttons: { id: id.toString() } }
      }
    );
  }

  async getButton ({ channel, buttonId }) {
    log('Get button:', { channel, buttonId });
    if (!channel || !buttonId) return null;

    // This returns the channel document with only the matching button in the 'buttons' array.
    // The button itself would be in `result.buttons[0]` if the channel and button are found.
    return this._getCollection().findOne(
      { name: channel.toString(), "buttons.id": buttonId.toString() },
      { projection: { "buttons.$": 1, name: 1, _id: 1 } } // Also project _id and name of channel
    );
  }

  async getButtonByName ({ channel, buttonName }) {
    log('Get button by name:', { channel, buttonName });
    if (!channel || !buttonName) return null;
    
    // This returns the channel document with only the matching button in the 'buttons' array.
    return this._getCollection().findOne(
      { name: channel.toString(), "buttons.name": buttonName },
      { projection: { "buttons.$": 1, name: 1, _id: 1 } } // Also project _id and name of channel
    );
  }

  async getRandomButton (channelName) {
    log(`Get random button on channel: ${channelName}`);
    if (!channelName) return null;
    const results = await this._getCollection().aggregate([
      { $match: { name: channelName } },
      { $unwind: "$buttons" },
      { $sample: { size: 1 } },
      { $replaceRoot: { newRoot: "$buttons" } } // Return just the button document
    ]).toArray();
    return results.length > 0 ? results[0] : null;
  }
}

const channel = new Channel();
module.exports = channel;
