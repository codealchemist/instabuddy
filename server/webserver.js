const fs = require('fs')
const path = require('path')
const express = require('express')
const httpsEnforcer = require('https-enforcer')
const bodyParser = require('body-parser')
const { connectToDatabase } = require('./models/__db') // Import connectToDatabase
const channelModel = require('./models/channel')
const storageAdapter = require('./storage-adapter')
const instabuddyConnector = require('./connector')

const app = express()
const port = process.env.PORT || 3000
const env = process.env.ENV || 'dev'
const audioPath = path.join(__dirname, '../audio')
const pathMap = {
  prod: 'dist',
  dev: 'client'
}
const envPath = pathMap[env]
console.log('- envPath', envPath)

// open graph defaults
const openGraph = {
  username: '@albertomiranda',
  image: 'https://instabuddy.herokuapp.com/android-chrome-256x256.png',
  proxiedImage: 'https://instabuddy.herokuapp.com/android-chrome-256x256.png',
  title: 'InstaBuddy',
  url: 'https://instabuddy.herokuapp.com',
  description: 'Instant button generator.'
}

async function start (callback) { // Make start function async
  await connectToDatabase() // Connect to DB first
  setRoutes()

  if (typeof callback !== 'function') return listen()
  callback(app, () => {
    // Socket is ready.
    instabuddyConnector.connect()
  })
}

function setLocalAudioRoutes () {
  const audioPath = path.join(__dirname, '../audio')
  app.use('/audio', express.static(audioPath))

  app.post('/binary/:channel/:id/:name', (req, res) => {
    const { id, name, channel } = req.params
    console.log(`SAVE BINARY DATA: ${id}:${name} @ ${channel}`)

    const data = { id, name, channel }
    storageAdapter.saveBinary(req, audioPath, data) // Save to disk.
    res.json({ ok: true })
  })
}

function setRemoteAudioRoutes () {
  app.post('/binary/:channel/:id/:name', (req, res) => {
    const { id, name, channel } = req.params
    console.log(`SAVE BINARY DATA: ${id}:${name} @ ${channel}`)

    const data = { id, name, channel }
    storageAdapter.upload(req, data) // Save on the cloud.
    res.json({ ok: true })
  })
}

function isPrivateIp (host) {
  return host.match(
    /^localhost|(^127\.)|(^192\.168\.)|(^10\.)|(^172\.1[6-9]\.)|(^172\.2[0-9]\.)|(^172\.3[0-1]\.)|(^::1$)|(^[fF][cCdD])/
  );
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

  app.get('/channel/:channel/remote-play/:buttonId', (req, res) => {
    const { channel, buttonId } = req.params
    console.log(`REMOTE-PLAY from CHANNEL '${channel}':`, buttonId)
    channelModel.getButton({ channel, buttonId }, (err, response) => {
      if (err) {
        console.log(
          `ERROR remote-playing standalone button @${channel}: ${buttonId}`,
          err
        )
        return
      }

      // Empty.
      if (!response.buttons || !response.buttons.length) {
        console.log(
          `CAN'T REMOTE PLAY ${buttonId} @${channel}, document not found`
        )
        res.render('button-not-found', { channel })
        return
      }

      // Got button.
      const button = response.buttons[0]
      const { id, src } = button

      // Remote playback using socket.
      instabuddyConnector.play({ channel, id, src })

      res.json(button)
    })
  })

  app.get('/channel/:channel/remote-random', (req, res) => {
    const { channel } = req.params
    console.log(`REMOTE-RANDOM-PLAY from CHANNEL '${channel}'`)

    instabuddyConnector.playRandom(channel)
    res.send(`RANDOM playback @${channel}`)
  })

  app.use(httpsEnforcer)
  app.set('views', path.resolve(envPath))
  app.engine('html', require('ejs').renderFile)
  app.set('view engine', 'html')

  app.use(bodyParser.json()) // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

  app.get('/', (req, res) => {
    res.render('index', { openGraph })
  })

  app.get('/channel/:id', (req, res) => {
    const id = req.params.id
    console.log(`Opening channel: ${id}`)

    const channelOpenGraph = Object.assign({}, openGraph, {
      title: `InstaBuddy @${id}`,
      url: `${openGraph.url}/channel/${id}`
    })
    res.render('index', { openGraph: channelOpenGraph })
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
    const { channel, buttonId } = req.params
    console.log(`PLAY from CHANNEL '${channel}':`, buttonId)
    channelModel.getButton({ channel, buttonId }, (err, response) => {
      if (err) {
        console.log(
          `ERROR playing standalone button @${channel}: ${buttonId}`,
          err
        )
        return
      }

      // Empty.
      if (!response.buttons || !response.buttons.length) {
        console.log(`CAN'T PLAY ${buttonId} @${channel}, document not found`)
        res.render('button-not-found', { channel })
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
      res.render('button', { channel, button, openGraph: buttonOpenGraph })
    })
  })

  app.get('/channel/:id/create', (req, res) => {
    const id = req.params.id
    console.log(`Creating channel: ${id}`)
    channelModel.create(id, () => {
      console.log(`Channel created: ${id}`)

      const channelOpenGraph = Object.assign({}, openGraph, {
        title: `InstaBuddy @${id}`,
        url: `${openGraph.url}/channel/${id}`
      })
      res.render('index', { openGraph: channelOpenGraph })
      return
    })
  })

  app.post('/slack', (req, res) => {
    console.log('SLACK:', req.body)
    const { text, user_name } = req.body
    const [channel, buttonName] = text.split('/')

    channelModel.getButtonByName({ channel, buttonName }, (err, response) => {
      if (err) {
        console.log(
          `ERROR playing standalone button @${channel}: ${buttonId}`,
          err
        )
        res.json({
          text: `Oops, I found an error with '${channel}/${buttonName}', sorry!`,
          attachments: [
            {
              text: err.message || err
            }
          ]
        })
        return
      }

      // Empty.
      if (!response.buttons || !response.buttons.length) {
        console.log(`CAN'T PLAY ${buttonId} @${channel}, document not found`)
        res.json({
          text: `Oops, I didn't find '${channel}/${buttonName}', sorry!`
        })
        return
      }

      // Got button.
      const button = response.buttons[0]
      const buttonId = button.id
      const buttonUrl = `${openGraph.url}/channel/${channel}/play/${buttonId}`

      res.json({
        response_type: 'in_channel',
        title: `InstaBuddy @${channel}/${buttonName}`,
        text: `<${buttonUrl}>`,
        unfurl_links: true,
        attachments: [
          {
            text: `@${user_name} says '${buttonName}'`
          }
        ]
      })
    })
  })

  app.use('/', express.static(staticPath))

  app.use((req, res) => {
    res.sendStatus(404)
  })
}

function listen () {
  const server = app.listen(port, () => {
    console.log(`INSTABUDDY server listening on http://localhost:${port}`)
  });

  server.on('error', (err) => {
    console.error('Failed to start server:', err);
  });
}

module.exports = { start }
