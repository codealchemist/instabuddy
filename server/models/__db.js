require('dotenv').config()
const mongojs = require('mongojs')

const connectionsMap = {
  prod: process.env.MONGODB_URI,
  dev: 'mongodb://localhost:27017/instabuddy'
}
const env = process.env.ENV || 'dev'
const connectionString = connectionsMap[env]
console.log(`
  ENV: ${env}
  Connection string (without login):
  · ${connectionString.replace(/^.*@/, '')}
`)
const db = mongojs(connectionString)

module.exports = db
