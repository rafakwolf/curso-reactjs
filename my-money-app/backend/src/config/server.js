const port = 3003

const express = require('express')
const bodyParser = require('body-parser')
const allowCors = require('./cors')
const queryParser = require('express-query-int')
const server = express()

server.use(bodyParser.urlencoded({  extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function(){
    console.log(`Server running on port ${port}.`)
})

module.exports = server