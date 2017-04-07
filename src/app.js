'use strict'
console.log('hello tweet')
var io = require('socket.io-client')
var socket = io('http://localhost:3030')
socket.on('news', function (data) {
  console.log(data)
})
