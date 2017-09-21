const fs = require('fs')
const path = require('path')
const storage = require('../storage')

const file = path.join(__dirname, '../../audio/yeah/1505880961329.webm')
const buffer = fs.readFileSync(file)
const id = 'yeah'
const type = 'webm'
storage.upload({buffer, id}, (result) => {
  console.log('STORAGE UPLOAD, result:', result)
})
