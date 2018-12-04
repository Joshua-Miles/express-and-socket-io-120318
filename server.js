var express = require('express');
var app = express()
var server = require('http').Server(app);
var io = require('socket.io')(server);

let allCharacters = [];
io.on('connection', function(socket){

    socket.on('join', function(state, respond){
        let character = {
            name: state.name,
            state: state
        }
        respond(allCharacters)
        allCharacters.push(character)
        socket.broadcast.emit('joined', state)


        socket.on('update', function(state){
            character.state = state
            io.emit(character.name, state)
        })
    })

})

app.use(express.static('public'))

app.get('/', function(request, response){
    response.send(`
        <html>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
    `)
})

server.listen(3000)