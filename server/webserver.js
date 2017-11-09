const fs = require('fs')
const path = require('path')
const express = require('express')
const httpsEnforcer = require('https-enforcer')
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

// open graph defaults
const openGraph = {
  username: '@albertomiranda',
  image: 'https://instabuddy.herokuapp.com/android-chrome-256x256.png',
  proxiedImage: 'https://instabuddy.herokuapp.com/android-chrome-256x256.png',
  title: 'InstaBuddy',
  url: 'https://instabuddy.herokuapp.com',
  description: 'Instant button generator.'
}

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

function isPrivateIp (host) {
  return host.match(/^localhost|(^127\.)|(^192\.168\.)|(^10\.)|(^172\.1[6-9]\.)|(^172\.2[0-9]\.)|(^172\.3[0-1]\.)|(^::1$)|(^[fF][cCdD])/)
}

function redirectToHeroku (req, res, next) {
  const host = req.get('host')
  if (host !== 'instabuddy.herokuapp.com' && !isPrivateIp(host)) {
    res.redirect(`https://instabuddy.herokuapp.com${req.path}`)
    return
  }

  next()
}

function setRoutes (localAudio = false) {
  const staticPath = path.join(__dirname, `../${envPath}`)

  if (localAudio) {
    setLocalAudioRoutes()
  } else {
    setRemoteAudioRoutes()
  }

  app.use(redirectToHeroku)
  app.use(httpsEnforcer)
  app.use('/', express.static(staticPath))
  app.set('views', path.resolve(envPath))
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html')

  app.get('/channel/:id', (req, res) => {
    const id = req.params.id
    console.log(`Opening channel: ${id}`)

    const channelOpenGraph = Object.assign({}, openGraph, {
      title: `InstaBuddy @${id}`,
      url: `${openGraph.url}/channel/${id}`,
    })
    res.render('index', {openGraph: channelOpenGraph})
  })

  app.get('/channel/:id/reset', (req, res) => {
    const id = req.params.id
    console.log(`RESET CHANNEL '${id}'`)
    channelModel.reset(id, () => {
      console.log(`CHANNEL '${id}' RESET successfully.`)
      res.redirect(`/channel/${id}`)
    })
  })

  app.get('/channel/:channel/play/:buttonId', (req, res) => {
    const {channel, buttonId} = req.params
    console.log(`PLAY from CHANNEL '${channel}':`, buttonId)
    channelModel.getButton({channel, buttonId}, (err, response) => {
      if (err) {
        console.log(`ERROR playing standalone button @${channel}: ${buttonId}`, err)
        return
      }

      // Empty.
      if (!response.buttons || !response.buttons.length) {
        console.log(`CAN'T PLAY ${buttonId} @${channel}, document not found`)
        res.render('button-not-found', {channel})
        return
      }

      // Got button.
      const button = response.buttons[0]
      const buttonOpenGraph = Object.assign({}, openGraph, {
        username: '',
        url: `${openGraph.url}/channel/${channel}/play/${buttonId}`,
        title: button.name,
        description: `InstaBuddy @${channel}`
      })
      res.render('button', {channel, button, openGraph: buttonOpenGraph})
    })
  })

  app.get('/channel/:id', (req, res) => {
    const id = req.params.id
    console.log(`Opening channel: ${id}`)
    res.render('index', {openGraph})
  })

  app.post('/slack', (req, res) => {
    console.log('SLACK:', req.body)
    res.json({
      "response_type": "in_channel",
      "text": "Hey! Let's rock!",
      "attachments": [
        {
          "text": "Hey hey hey!"
        }
      ]
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
