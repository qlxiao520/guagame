class GuaAnimation {

    constructor(game) {
        this.game = game
        //为了省事,hard code一套动画
        this.animations = {
            idle: [],
            run: [],
        }
        for (var i = 1; i < 3; i++) {
            var name = `idle${i}`
            var t = game.textureByName(name)
            this.animations['idle'].push(t)
        }
        for (var i = 1; i < 9; i++) {
            var name = `run${i}`
            var t = game.textureByName(name)
            this.animations['run'].push(t)
        }

        this.animationName = 'idle'

        this.texture = this.frames()[0]
        this.frameIndex = 0
        this.frameCount = 3//每3帧变一次图片

        //画布水平翻转标记
        this.flipX = false

        this.w = this.texture.width
        this.h = this.texture.height

    }
    frames() {
        return this.animations[this.animationName]
    }
    static new(game) {
        return new this(game)
    }
    update() {
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length //一直在 1-8变化
            this.texture = this.frames()[this.frameIndex]
        }
    }
    draw() {
        if (this.flipX) {//翻转绘图
            var context = this.game.context
            context.save()
            var x = this.x + this.w/2  
            context.translate(x, 0)
            context.scale(-1, 1)
            context.translate(-x, 0)
            context.drawImage(this.texture, this.x, this.y)
            context.restore()
        } else {
            this.game.drawImage(this)
        }

    }
    move(x, keyStatus) {

        this.flipX = x < 0
        log(this.flipX)
        this.x += x
        var status = {
            up: 'idle',
            down: 'run',
        }
        this.animationName = status[keyStatus]
    }
}