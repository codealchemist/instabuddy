require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb')

const connectionsMap = {
  prod: process.env.MONGODB_URI,
  dev: 'mongodb://localhost:27017/instabuddy'
}
const env = process.env.ENV || 'dev'
const connectionString = connectionsMap[env]

// It's better to not log credentials, even if it's just 'localhost'
// For prod, MONGODB_URI will contain credentials.
let loggableConnectionString = connectionString
if (connectionString.includes('@')) {
  loggableConnectionString = `mongodb://${connectionString.split('@')[1]}`
}

console.log(`
  ENV: ${env}
  Connection string (without login):
  · ${loggableConnectionString}
`)

const client = new MongoClient(connectionString, {
  serverSelectionTimeoutMS: 5000, // 5 second timeout
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

let dbInstance = null

async function connectToDatabase () {
  if (dbInstance) {
    console.log('DB connection already established.') // New log
    return dbInstance
  }
  try {
    console.log('Attempting to connect to MongoDB native driver...') // New log
    await client.connect() // This is the critical call
    console.log('Successfully connected to MongoDB using native driver.') // Existing log
    dbInstance = client.db()
    console.log(`Connected to database: ${dbInstance.databaseName}`) // New log
    return dbInstance
  } catch (err) {
    // Log the full error object, including stack
    console.error(
      'Failed to connect to MongoDB using native driver. Error object:',
      err
    ) // Modified log
    process.exit(1)
  }
}

// Function to get the database instance
function getDb () {
  if (!dbInstance) {
    // This state should ideally not be reached if connectToDatabase is called at startup.
    // Consider throwing an error or ensuring connectToDatabase is called.
    console.error(
      'Database not initialized. Ensure connectToDatabase() is called on startup.'
    )
    throw new Error('Database not connected.')
  }
  return dbInstance
}

// Function to get the client instance (for closing connection, etc.)
function getClient () {
  return client
}

module.exports = {
  connectToDatabase,
  getDb,
  getClient
}
