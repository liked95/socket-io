const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => console.log('message: ', msg))
    socket.on('disconnect', () => console.log('a user disconnected'))
})

server.listen(3000, () => {
    console.log('Listening on this port')
})

