const socket = io.connect('http://localhost:3000');
const myCharacter = new Character(window.prompt('Please enter your name:'))

const addCharacter = function(properties){
    let character = new Character(properties.name)
    Object.assign(character,properties)
    socket.on(character.name, properties => {
        Object.assign(character, properties)
    })
}

socket.emit('join', myCharacter, function(characters){
    characters.forEach(addCharacter)
})

socket.on('joined', (name) => {
    addCharacter(name)
})

document.addEventListener('keydown', function(e){
    if(e.repeat) return
    switch(e.key){
        case 'ArrowLeft':
            myCharacter.walkWest()
        break;
        case 'ArrowDown':
            myCharacter.walkSouth()
        break;
        case 'ArrowRight':
            myCharacter.walkEast()
        break;
        case 'ArrowUp':
            myCharacter.walkNorth()
        break;
    }
    socket.emit('update', myCharacter)
})

document.addEventListener('keyup', function(e){
    switch(e.key){
        case 'ArrowLeft':
            myCharacter.stopWest()
        break;
        case 'ArrowDown':
            myCharacter.stopSouth()
        break;
        case 'ArrowRight':
            myCharacter.stopEast()
        break;
        case 'ArrowUp':
            myCharacter.stopNorth()
        break;
    }
    socket.emit('update', myCharacter)
})