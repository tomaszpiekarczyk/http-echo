var express = require('express')
var bodyParser = require('body-parser') 
var os = require('os');

var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.all('*', (req, res) => {
  app.set('json spaces', 2);
 
  res.json({
    service: process.env.SERVICE_NAME || undefined, // Keys with value `undefined` are omitted during JSON serialization
    path: req.path,
    method: req.method,
    hostname: req.hostname,
    ip: req.ip,
    hostname: os.hostname(),
    hostip: os.networkInterfaces().eth0[0].address,
  })
})

app.listen(process.env.PORT || 3000)
