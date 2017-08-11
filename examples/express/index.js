const rjqUI = require('../../index')
const express = require('express')
const app = express()

app.use(rjqUI('express'))

app.get('/', function (req, res) {
  res.send('Hello world')
})

const listener = app.listen(0)
console.info(`Address: ${JSON.stringify(listener.address())}`)
console.info(`Navigate To: http://localhost:${listener.address().port}/rjq-ui/`)
