const fs = require('fs')
const path = require('path')
const express = require('express')
const channelModel = require('./models/channel')

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

    // const body = req.body
    // const buffer = new Buffer(body.toString('binary'), 'binary')
    const data = {id, name, channel}
    saveBinary(req, data)
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

function saveBinary (req, data) {
  const file = `${audioPath}/${data.channel}/${data.id}.webm`
  const fileWriter = fs.createWriteStream(file)

  var buffer = new Buffer('')
  req.on('data', function(chunk) {
      buffer = Buffer.concat([buffer, chunk])
  })
  req.on('end', function() {
    fileWriter.write(buffer)
    fileWriter.end()
    console.log('SAVE BINARY: File written OK:', file)

    data.src = `/audio/${data.channel}/${data.id}.webm`
    saveDb(data)
  })

  // Save new button in db.
  function saveDb (data) {
    channelModel.addButton(data, (err, response) => {
      console.log('DB: Saved OK!', response)
    })
  }
}

module.exports = { start }
