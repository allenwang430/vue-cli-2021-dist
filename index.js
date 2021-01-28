const express = require('express')
const app = express()

// reply to request with "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World! This is simple express server')
})

// start a server on port 9090
const server = app.listen(7777, () => {
  const port = server.address().port
  console.log('Example app listening on port ----- 7777', port)
})
