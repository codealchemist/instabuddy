const WebSocket = require('ws')

let url = 'ws://localhost:3000'
if (process.env.ENV === 'prod') url = 'wss://instabuddy.herokuapp.com'
console.log(`InstabuddyConnector: Socket URL: ${url}`)

class InstabuddyConnector {
  constructor () {
    this.ready = false
    this.onReadyCallback = null

    this.interval = setInterval(() => {
      console.log(`--- WebSocket.readyState: ${this.ws.readyState} / open: ${this.ws.OPEN}`)
      if (this.ws.readyState !== this.ws.OPEN) {
        if (!this.ready) return
        console.log('InstabuddyConnector: Closed.')
        console.log('InstabuddyConnector: Reconnect...')
        this.disconnect()
        this.connect()
      }
    }, 2000)
  }

  connect () {
    this.ws = new WebSocket(url)
    this.ws.on('open', () => {
      this.ready = true
      console.log('InstabuddyConnector: Connected.')
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

  play ({channel, id, src}) {
    if (!this.ready) {
      console.log('Delayed playback, waiting for WS to connect...')
      setTimeout(() => {
        this.play({channel, id, src})
      }, 250)
      return
    }

    console.log('Play:', {channel, id, src})
    const message = {
      type: 'play',
      data: { channel, id, src }
    }
    const data = JSON.stringify(message)
    this.ws.send(data)
  }

  playRandom (channel) {
    if (!this.ready) {
      console.log('Delayed random playback, waiting for WS to connect...')
      setTimeout(() => {
        this.playRandom(channel)
      }, 250)
      return
    }

    console.log(`Random play @${channel}`)
    const message = {
      type: 'playRandom',
      channel: channel
    }
    const data = JSON.stringify(message)
    this.ws.send(data)
  }
}

const instabuddyConnector = new InstabuddyConnector()
module.exports = instabuddyConnector
