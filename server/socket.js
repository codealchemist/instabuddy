const http = require('http')
const WebSocket = require('ws')
const events = require('./events')

let wss
const port = process.env.PORT || 3000

function start (app, callback) {
  if (app) return startWithApp(app, callback)

  wss = new WebSocket.Server({
    perMessageDeflate: false,
    port
  })

  setEvents()
}

function startWithApp (app, callback) {
  const server = http.createServer(app)
  wss = new WebSocket.Server({
    perMessageDeflate: false,
    server
  })

  setEvents()

  server.listen(port, () => {
    console.log(`
      WEB SERVER listening on port ${port}.
      SOCKET attached.
    `)
  })
}

function setEvents () {
  console.log('set socket events')
  wss.on('connection', (ws) => {
    log('NEW client')

    ws.on('message', (data) => {
      const message = JSON.parse(data)
      log('MSG:', message)
      if (typeof events[message.type] === 'function') {
        events[message.type]({broadcast, send, ws, message})
      }
    })
  })
}

function broadcast (ws, message) {
  const data = JSON.stringify(message)
  wss.clients.forEach((client) => {
    if (client === ws) return
    if (client.readyState !== WebSocket.OPEN) return
    client.send(data, (error) => {}) // eslint-disable-line
  })
}

function send (ws, message) {
  // console.log('SEND:', message)
  const data = JSON.stringify(message)
  if (ws.readyState !== WebSocket.OPEN) return
  ws.send(data, (error) => {}) // eslint-disable-line
}

function log () {
  const ts = (new Date()).toISOString()
  console.log(`${ts}:`, ...arguments)
}

module.exports = { start }
