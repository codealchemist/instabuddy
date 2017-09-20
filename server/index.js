const http = require('http')
const socket = require('./socket')
const webserver = require('./webserver')

webserver.start(app => socket.start(app))
