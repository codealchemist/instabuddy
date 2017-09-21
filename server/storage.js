const cloudinary = require('cloudinary')
const Duplex = require('stream').Duplex

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

function streamify (buffer) {
  const stream = new Duplex()
  stream.push(buffer)
  stream.push(null)
  return stream
}

function upload ({buffer, id, type}, callback) {
  const stream = cloudinary.uploader.upload_stream(callback, {
    resource_type: type || 'raw',
    public_id: id
  })

  streamify(buffer).pipe(stream)
}

module.exports = {upload, streamify}
