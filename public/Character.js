class Character extends GameObject{

    constructor(name){
        super('/character')
        this.name = name
        this.width = 50
        this.speed = 3
        this.direction = {
            x: 0,
            y: 0
        }
        this.movement = setInterval( () => {
            this.x += this.speed * this.direction.x
            this.y += this.speed * this.direction.y
            if(this.direction.x == 0 && this.direction.y == 0) this.selectedSprite = 'static'
        }, 1000 / settings.framesPerSecond)
    }

    walkEast(){
        this.selectedSprite = 'walkright'
        this.direction.x = 1
    }
    
    walkWest(){
        this.selectedSprite = 'walkleft'
        this.direction.x = -1
    }
    
    walkNorth(){
        this.selectedSprite = 'walkup'
        this.direction.y = 1
    }
    
    walkSouth(){
        this.selectedSprite = 'walkdown'
        this.direction.y = -1 
    }

    stopEast(){
       this.direction.x = 0 
    }

    stopWest(){
        this.direction.x = 0
    }

    stopNorth(){
        this.direction.y = 0
    }

    stopSouth(){
        this.direction.y = 0
    }
    
    stop(){
        this.direction.x = 0
        this.direction.y = 0
    }

    toJSON(){
        return {
            name: this.name,
            direction: this.direction,
            selectedSprite: this.selectedSprite,
            x: this.x,
            y: this.y
        }
    }

}