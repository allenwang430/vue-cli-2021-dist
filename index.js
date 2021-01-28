const express = require('express')
const app = express()

// reply to request with "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World! This is simple express server')
})

// start a server on port 50000
const server = app.listen(50000, () => {
  const port = server.address().port
  console.log('Example app listening on port ----- 50000', port)
})
