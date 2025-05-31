const WebSocket = require('ws')

let url = 'ws://localhost:3000'
if (process.env.ENV === 'prod') url = 'wss://instabuddy-five.vercel.app'

class InstabuddyConnector {
  constructor () {
    this.ready = false
    this.onReadyCallback = null

    this.interval = setInterval(() => {
      // console.log(`--- WebSocket.readyState: ${this.ws.readyState} / open: ${this.ws.OPEN}`)
      if (this.ws && this.ws.readyState !== this.ws.OPEN) {
        // Check if this.ws exists
        if (!this.ready) return
        this.log('Closed.')
        this.log('Reconnect...')
        this.disconnect()
        this.connect()
      }
    }, 2000)
  }

  connect () {
    this.ws = new WebSocket(url)
    this.ws.on('open', () => {
      this.ready = true
      this.log('Connected.')
      if (this.onReadyCallback) {
        this.onReadyCallback()
      }
    })
  }

  disconnect () {
    this.ready = false
    this.ws.terminate()
  }

  onReady (callback) {
    if (typeof callback !== 'function') return
    this.onReadyCallback = callback
    if (this.ready) {
      callback()
    }
    return this
  }

  play ({ channel, id, src }) {
    if (!this.ready) {
      this.log('Delayed playback, waiting for WS to connect...')
      setTimeout(() => {
        this.play({ channel, id, src })
      }, 250)
      return
    }

    this.log('Play:', { channel, id, src })
    const message = {
      type: 'play',
      data: { channel, id, src }
    }
    const data = JSON.stringify(message)
    this.ws.send(data)
  }

  playRandom (channel) {
    if (!this.ready) {
      this.log('Delayed random playback, waiting for WS to connect...')
      setTimeout(() => {
        this.playRandom(channel)
      }, 250)
      return
    }

    this.log(`Random play @${channel}`)
    const message = {
      type: 'playRandom',
      channel: channel
    }
    const data = JSON.stringify(message)
    this.ws.send(data)
  }

  log () {
    console.log('[ InstabuddyConnector ]-->', ...arguments)
  }
}

const instabuddyConnector = new InstabuddyConnector()
module.exports = instabuddyConnector
