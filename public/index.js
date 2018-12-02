let myCharacter = new Character('Joshua')

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
})