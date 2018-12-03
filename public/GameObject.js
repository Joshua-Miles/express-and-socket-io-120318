class GameObject {

    constructor(spritePath){
        this.spritePath = spritePath
        this.element = document.createElement('div')
        this.imageElement = document.createElement('img')
        this.imageElement.style.width = '100%'
        this.labelElement = document.createElement('span')
        this.element.append(
            this.labelElement,
            this.imageElement,
        )
        this.element.style.position = 'absolute'
        this.x = 0
        this.y = 0
        this.selectedSprite = 'static'
        document.body.append(this.element)
    }

    get name(){
        return this._name
    }

    set name(value){
        this._name = value
        this.labelElement.innerText = value
    }

    get fullSpritePath(){
        return `assets/${this.spritePath}/${this.selectedSprite}.gif`
    }

    get x(){
        return parseInt(this.element.style.left)
    }

    set x(value){
        this.element.style.left = `${value}px`
    }

    get y(){
        return parseInt(this.element.style.bottom)
    }

    set y(value){
        this.element.style.bottom = `${value}px`
    }

    get width(){
        return parseInt(this.style.width)
    }

    set width(value){
        this.element.style.width = `${value}px`
    }

    get height(){
        return parseInt(this.style.height)
    }

    set height(value){
        this.element.style.height = `${value}px`
    }

    get selectedSprite(){
        return this._selectedSprite
    }

    set selectedSprite(value){
        if(this._selectedSprite == value) return
        this._selectedSprite = value 
        this.imageElement.src = this.fullSpritePath
    }
}