var express = require('express');
var app = express()
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static('public'))
server.listen(3000);
const activeCharacters = []

io.on('connect', function(socket){
    socket.on('join', (state, respond) => {
        let character = { name: state.name, state: state }
        socket.broadcast.emit('joined', character)
        socket.on('update', function(state){
            character.state = state
            socket.broadcast.emit(character.name, character)
        })
        respond(activeCharacters)
        activeCharacters.push(character)
    })
})