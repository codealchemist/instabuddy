const WebSocket = require('ws')
const events = require('./events')

let wss

function start (callback) {
  const socketPort = process.env.SOCKET_PORT || 4000
  wss = new WebSocket.Server({
    perMessageDeflate: false,
    port: socketPort
  }, () => {
    console.log(`INSTABUDDY socket listening on http://localhost:${socketPort}`)
    setEvents()
    if (typeof callback === 'function') callback()
  })
}

function setEvents () {
  wss.on('connection', (ws) => {
    log('NEW client')

    ws.on('message', (data) => {
      const message = JSON.parse(data)
      // log('MSG:', message)
      if (typeof events[message.type] === 'function') {
        events[message.type]({broadcast, send, ws, message})
      }
    })
  })
}

function broadcast (ws, message) {
  wss.clients.forEach((client) => {
    if (client === ws) return
    if (client.readyState !== WebSocket.OPEN) return
    client.send(message, (error) => {}) // eslint-disable-line
  })
}

function send (ws, message) {
  console.log('SEND:', message)
  const data = JSON.stringify(message)
  if (ws.readyState !== WebSocket.OPEN) return
  ws.send(data, (error) => {}) // eslint-disable-line
}

function log () {
  const ts = (new Date()).toISOString()
  console.log(`${ts}:`, ...arguments)
}

module.exports = { start }
