const path = require('path')
const express = require('express')

function start () {
  const app = express()
  const port = process.env.PORT || 3000
  const staticPath = path.join(__dirname, '../client')
  app.use(express.static(staticPath))
  app.set('views', path.resolve('client'))
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html')

  app.get('/channel/:id', (req, res) => {
    const id = req.params.id
    console.log(`Opening channel: ${id}`)
    res.render('index')
  })

  app.use((req, res) => {
    res.sendStatus(404)
  })

  app.listen(port, () => {
    console.log(`INSTABUDDY server listening on http://localhost:${port}`)
  })
}

module.exports = { start }
