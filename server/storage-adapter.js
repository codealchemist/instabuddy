const mkdirp = require('mkdirp')
const storage = require('./storage')
const channelModel = require('./models/channel')

function log () {
  console.log('[ StorageAdapter ]', ...arguments)
}

function upload (req, data) {
  bufferify(req, (buffer) => {
    const id = `${data.channel}-${data.id}.webm`
    storage.upload({buffer, id}, (result) => {
      log('Upload, result:', result)

      // Add storage src.
      data.src = result.secure_url
      saveDb(data)
    })
  })
}

function bufferify (req, callback) {
  let buffer = new Buffer.from('')
  req.on('data', function(chunk) {
    buffer = Buffer.concat([buffer, chunk])
  })
  req.on('end', () => {
    callback(buffer)
  })
}

function saveBinary (req, audioPath, data) {
  const filePath = `${audioPath}/${data.channel}`
  const file = `${filePath}/${data.id}.webm`

  // Ensure path exists.
  mkdirp(filePath, (err) => {
    if (err) {
      log(`ERROR: Unable to save file: '${file}'`, err)
      return
    }

    const fileWriter = fs.createWriteStream(file)
    let buffer = new Buffer.from('')
    req.on('data', function(chunk) {
      buffer = Buffer.concat([buffer, chunk])
    })
    req.on('end', () => {
      fileWriter.write(buffer)
      fileWriter.end()
      log('Save binary data: file written OK:', file)

      data.src = `/audio/${data.channel}/${data.id}.webm`
      saveDb(data)
    })
  })
}

// Save new button in db.
function saveDb (data) {
  channelModel.addButton(data, (err, response) => {
    log('DB: Saved OK!', response)
  })
}

module.exports = {upload, bufferify, saveBinary, saveDb}
