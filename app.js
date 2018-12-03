const io = require('socket.io')()
const activeCharacters = []

io.on('connect', function(socket){
    socket.on('join', (character, respond) => {
        socket.broadcast.emit('joined', character)
        socket.on('update', function(properties){
            Object.assign(character, properties)
            socket.broadcast.emit(character.name, properties)
        })
        respond(activeCharacters)
        activeCharacters.push(character)
    })
})

io.listen(3000, () => {
    console.log('Listening on porth 3000')
})