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

class GuaParticle extends GuaImage {
    constructor(game) {
        super(game, 'fire')
        this.setup()
    }
    setup() {
        this.life = 20
    }
    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }
    update() {
        this.life-- 

        this.x += this.vx
        this.y += this.vy

        //加速度
        var factor = 0.01
        this.vx += factor*this.vx
        this.vy += factor*this.vy

    }
    //自动调用guaimage的 draw

}

class GuaParticleSystem {
    constructor(game) {
        this.game = game

        this.setup()
    }
    setup() {
        this.duration = 50
        this.x = 150
        this.y = 300
        this.numberOfParticles = 30
        this.particles = []
    }
    static new(game) {
        return new this(game)
    }
    update() {
        this.duration -- 

        //添加小火花
        if(this.particles.length < this.numberOfParticles){
            var p = GuaParticle.new(this.game)
            //初始坐标this.x this.y

            var speed = 2
            var vx= randomBetween(-speed,speed)
            var vy= randomBetween(-speed,speed)
            p.init(this.x,this.y,vx,vy)
            this.particles.push(p)
        }
        //更新所有小火花
        for (var p of this.particles) {
            p.update()
        }
        //删除死掉的小火花
        this.particles = this.particles.filter(p=>p.life>0)
    }
    draw() {

        if(this.duration <= 0){
            //爆炸时间结束 临时方案 不draw  应该做成删掉自己  
            return
        }
        for (var p of this.particles) {
            p.draw()
        }
    }

}

class sceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        var label = GuaLabel.new(game, 'hello')
        this.addElement(label)

        var ps = GuaParticleSystem.new(game)
        this.addElement(ps)
    }
    // draw() {//或者不写draw方法 会自动调用父类的方法
    //     super.draw()
    // }
    // update() {
    //     super.update()
    // }
}