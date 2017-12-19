const WebSocket = require('ws')

let url = 'ws://localhost:3000'
if (process.env.ENV === 'prod') url = 'wss://instabuddy.herokuapp.com'
console.log(`InstabuddyConnector: Socket URL: ${url}`)

class InstabuddyConnector {
  constructor () {
    this.ready = false
    this.onReadyCallback = null
  }

  connect () {
    this.ws = new WebSocket(url)
    this.ws.on('open', () => {
      this.ready = true
      if (this.onReadyCallback) {
        this.onReadyCallback()
      }
    })

    this.ws.on('close', () => {
      this.reconnect()
    })
  }

  reconnect () {
    console.log('InstabuddyConnector: Reconnect...')
    this.ws = new WebSocket(url)
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
