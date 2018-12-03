const socket = io.connect('http://localhost:3000');
const myCharacter = new Character(window.prompt('Please enter your name:'))

const addCharacter = function(added){
    let character = new Character(added.name)
    character.state = added.state
    socket.on(character.name, updated => {
        character.state = updated.state
    })
}

socket.emit('join', myCharacter.state, function(characters){
    characters.forEach(addCharacter)
})

socket.on('joined', (character) => {
    addCharacter(character)
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
    socket.emit('update', myCharacter.state)
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
    socket.emit('update', myCharacter.state)
})