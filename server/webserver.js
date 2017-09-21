const fs = require('fs')
const path = require('path')
const express = require('express')
const mkdirp = require('mkdirp')
const channelModel = require('./models/channel')
const storage = require('./storage')

const app = express()
const port = process.env.PORT || 3000
const audioPath = path.join(__dirname, '../audio')
const pathMap = {
  prod: 'dist',
  dev: 'client'
}

function start (callback) {
  const env = process.env.ENV || 'dev'
  const envPath = pathMap[env]
  const staticPath = path.join(__dirname, `../${envPath}`)
  const audioPath = path.join(__dirname, '../audio')

  app.use('/', express.static(staticPath))
  app.use('/audio', express.static(audioPath))
  app.set('views', path.resolve(envPath))
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html')

  app.get('/channel/:id', (req, res) => {
    const id = req.params.id
    console.log(`Opening channel: ${id}`)
    res.render('index')
  })

  app.get('/channel/:id/reset', (req, res) => {
    const id = req.params.id
    console.log(`RESET CHANNEL '${id}'`)
    channelModel.reset(id, () => {
      console.log(`CHANNEL '${id}' RESET successfully.`)
      res.redirect(`/channel/${id}`)
    })
  })

  app.post('/binary/:channel/:id/:name', (req, res) => {
    const {id, name, channel} = req.params
    console.log(`SAVE BINARY DATA: ${id}:${name} @ ${channel}`)

    const data = {id, name, channel}
    // saveBinary(req, data) // Save to disk.
    upload(req, data)
  })

  app.use((req, res) => {
    res.sendStatus(404)
  })

  if (typeof callback !== 'function') return listen()
  callback(app)
}

function listen () {
  app.listen(port, () => {
    console.log(`INSTABUDDY server listening on http://localhost:${port}`)
  })
}

function upload (req, data) {
  bufferify(req, (buffer) => {
    const id = `${data.channel}-${data.id}`
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

function saveBinary (req, data) {
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

module.exports = { start }
