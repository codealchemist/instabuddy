const fs = require('fs'); // Added fs require
const mkdirp = require('mkdirp')
const storage = require('./storage')
const channelModel = require('./models/channel')

function log () {
  console.log('[ StorageAdapter ]', ...arguments)
}

async function upload (req, data) { // Made async
  bufferify(req, async (buffer) => { // Made callback async
    const id = `${data.channel}-${data.id}.webm`
    try {
      const result = await storage.upload({buffer, id}); // Assuming storage.upload can be awaited or is Promise-based
      log('Upload, result:', result)

      // Add storage src.
      data.src = result.secure_url
      await saveDb(data) // Await saveDb
    } catch (err) {
      log('Upload error:', err)
    }
  })
}

function bufferify (req, callback) {
  let buffer = Buffer.from('') // Corrected Buffer.from
  req.on('data', function(chunk) {
    buffer = Buffer.concat([buffer, chunk])
  })
  req.on('end', () => {
    callback(buffer)
  })
}

async function saveBinary (req, audioPath, data) { // Made async
  const filePath = `${audioPath}/${data.channel}`;
  const file = `${filePath}/${data.id}.webm`;

  try {
    const made = await mkdirp(filePath); // Use await
    log(`Path ${filePath} ensured. First directory made: ${made || 'none (already existed)'}`);

    const fileWriter = fs.createWriteStream(file);
    let buffer = Buffer.from(''); // Corrected Buffer.from
    req.on('data', function(chunk) {
      buffer = Buffer.concat([buffer, chunk]);
    });
    req.on('end', async () => { // Made callback async
      fileWriter.write(buffer);
      fileWriter.end();
      log('Save binary data: file written OK:', file);

      data.src = `/audio/${data.channel}/${data.id}.webm`;
      await saveDb(data); // Await saveDb
    });
    req.on('error', (err) => {
        log(`ERROR: Request stream error while saving file '${file}':`, err);
        fileWriter.end(); // Clean up
    });

  } catch (err) {
    log(`ERROR: Unable to create directory '${filePath}' or save file '${file}':`, err);
    // Consider how to propagate this error if needed
  }
}

// Save new button in db.
async function saveDb (data) { // Made async
  try {
    const response = await channelModel.addButton(data); // Use await
    log('DB: Saved OK!', response);
  } catch (err) {
    log('DB: Error saving button!', err);
  }
}

module.exports = {upload, bufferify, saveBinary, saveDb}
