class Character extends GameObject{

    constructor(name){
        super()
        let character = this;
        this.name = name
        this.width = 50
        this.speed = 3
        this.movement = {
            
            get east(){
                return this._east
            },
            
            set east(value){
                this._east = value
                if(value != null) character.selectedSprite = 'walkright'
                else if (this.stopped) character.selectedSprite = 'static'
            },

            get west(){
                return this._west
            },
            
            set west(value){
                this._west = value
                if(value != null) character.selectedSprite = 'walkleft'
                else if (this.stopped) character.selectedSprite = 'static'
            },

            get south(){
                return this._south
            },
            
            set south(value){
                this._south = value
                if(value != null) character.selectedSprite = 'walkdown'
                else if (this.stopped) character.selectedSprite = 'static'
            },

            get north(){
                return this._north
            },
            
            set north(value){
                this._north = value
                if(value != null) character.selectedSprite = 'walkup'
                else if (this.stopped) character.selectedSprite = 'static'
            },

            get stopped(){
                return [
                    this._east,
                    this._west,
                    this._north, 
                    this._sourth
                ].every( direction => direction == null)
            },

            _east: null,
            _west: null,
            _north: null,
            _south: null
        }
    }

    walkEast(){
        this.stop()
        this.movement.east = setInterval(() => {
           this.x = this.x + this.speed
        }, 1000 / settings.framesPerSecond)  
    }
    
    walkWest(){
        this.stop()
        this.movement.west = setInterval(() => {
           this.x = this.x -this.speed
        }, 1000 / settings.framesPerSecond)  
    }
    
    walkNorth(){
        this.stop()
        this.movement.north = setInterval(() => {
           this.y = this.y + this.speed
        }, 1000 / settings.framesPerSecond)  
    }
    
    walkSouth(){
        this.stop()
        this.movement.south = setInterval(() => {
           this.y = this.y -this.speed
        }, 1000 / settings.framesPerSecond)  
    }

    stopEast(){
        clearTimeout(this.movement.east)
        this.movement.east = null
    }

    stopWest(){
        clearTimeout(this.movement.west)
        this.movement.west = null
    }

    stopNorth(){
        clearTimeout(this.movement.north)
        this.movement.north = null
    }

    stopSouth(){
        clearTimeout(this.movement.south)
        this.movement.south = null
    }
    
    stop(){
        Object.values(this.movement).forEach(clearInterval)
        this.selectedSprite = 'static'
    }

}