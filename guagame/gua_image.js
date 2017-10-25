class GuaImage {
    constructor(game, name) {
        // this.game = game
        this.texture = game.textureByName(name)

        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
    }
    static new(game, name) {
        return new this(game, name)
    }
    draw() {

    }
    update() {

    }
}
//逻辑上来说 不应该继承GuaImage 但就这么做吧

class Player extends GuaImage {
    constructor(game, name) {
        super(game, name)

    }
    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
}
class Cloud extends GuaImage {
    constructor(game, name) {
        super(game, name)

    }
    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
}

class Enemy extends GuaImage {
    constructor(game, name) {
        super(game, name)

    }
    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
}





