const socket = require('./socket')
const binarySocket = require('./binary-socket')
const webserver = require('./webserver')

socket.start(() => webserver.start())
