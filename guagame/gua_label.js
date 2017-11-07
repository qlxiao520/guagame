class GuaLabel {
    constructor(game, text) {
        this.game = game
        this.text = text

    }
    static new(game, text) {
        return new this(game, text)
    }
    update() {

    }
    draw() {
        this.game.context.fillStyle = "black"
        this.game.context.fillText(this.text, 100, 290)
    }
}
