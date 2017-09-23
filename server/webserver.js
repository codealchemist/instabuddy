const fs = require('fs')
const path = require('path')
const express = require('express')
const secure = require('express-force-https')
const channelModel = require('./models/channel')
const storageAdapter = require('./storage-adapter')

const app = express()
const port = process.env.PORT || 3000
const env = process.env.ENV || 'dev'
const audioPath = path.join(__dirname, '../audio')
const pathMap = {
  prod: 'dist',
  dev: 'client'
}
const envPath = pathMap[env]

function start (callback) {
  setRoutes()

  if (typeof callback !== 'function') return listen()
  callback(app)
}

function setLocalAudioRoutes () {
  const audioPath = path.join(__dirname, '../audio')
  app.use('/audio', express.static(audioPath))

  app.post('/binary/:channel/:id/:name', (req, res) => {
    const {id, name, channel} = req.params
    console.log(`SAVE BINARY DATA: ${id}:${name} @ ${channel}`)

    const data = {id, name, channel}
    storageAdapter.saveBinary(req, audioPath, data) // Save to disk.
  })
}

function setRemoteAudioRoutes () {
  app.post('/binary/:channel/:id/:name', (req, res) => {
    const {id, name, channel} = req.params
    console.log(`SAVE BINARY DATA: ${id}:${name} @ ${channel}`)

    const data = {id, name, channel}
    storageAdapter.upload(req, data) // Save on the cloud.
  })
}

function setRoutes (localAudio = false) {
  const staticPath = path.join(__dirname, `../${envPath}`)

  if (localAudio) {
    setLocalAudioRoutes()
  } else {
    setRemoteAudioRoutes()
  }

  app.use(secure)
  app.use('/', express.static(staticPath))
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

  app.get('/channel/:id/create', (req, res) => {
    const id = req.params.id
    console.log(`CREATE CHANNEL '${id}'`)
    channelModel.create(id, () => {
      console.log(`CHANNEL '${id}' CREATED successfully.`)
      res.redirect(`/channel/${id}`)
    })
  })

  app.use((req, res) => {
    res.sendStatus(404)
  })
}

function listen () {
  app.listen(port, () => {
    console.log(`INSTABUDDY server listening on http://localhost:${port}`)
  })
}

module.exports = { start }
