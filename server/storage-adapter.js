const mkdirp = require('mkdirp')
const storage = require('./storage')
const channelModel = require('./models/channel')

function upload (req, data) {
  bufferify(req, (buffer) => {
    const id = `${data.channel}-${data.id}.webm`
    storage.upload({buffer, id}, (result) => {
      console.log('STORAGE UPLOAD, result:', result)

      // Add storage src.
      data.src = result.secure_url
      saveDb(data)
    })
  })
}

function bufferify (req, callback) {
  let buffer = new Buffer('')
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
      console.log(`ERROR: UNABLE TO SAVE FILE: '${file}'`, err)
      return
    }

    const fileWriter = fs.createWriteStream(file)
    let buffer = new Buffer('')
    req.on('data', function(chunk) {
      buffer = Buffer.concat([buffer, chunk])
    })
    req.on('end', () => {
      fileWriter.write(buffer)
      fileWriter.end()
      console.log('SAVE BINARY: File written OK:', file)

      data.src = `/audio/${data.channel}/${data.id}.webm`
      saveDb(data)
    })
  })
}

// Save new button in db.
function saveDb (data) {
  channelModel.addButton(data, (err, response) => {
    console.log('DB: Saved OK!', response)
  })
}

module.exports = {upload, bufferify, saveBinary, saveDb}
