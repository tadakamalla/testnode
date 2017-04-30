var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Testing Jenkins CI/CD with AWS and BMCS!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})