const BinaryServer = require('binaryjs').BinaryServer
const fs = require('fs')
const path = require('path')

const binaryServer = BinaryServer({port: 9001})
const audioPath = path.join(__dirname, '../client/audio')

binaryServer.on('connection', function(client) {
  console.log('new binary connection')

  client.on('stream', function(stream, meta) {
    console.log('New BINARY stream:', meta)
    const data = JSON.parse(meta)
    const audioFile = `${audioPath}/${data.channel}/${data.id}.webm`
    const fileWriter = fs.createWriteStream(audioFile)
    stream.pipe(fileWriter)

    stream.on('end', function() {
      fileWriter.end()
      console.log('File written OK:', audioFile)
    })
  })
})
