class sceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        var label = GuaLabel.new(game, 'hello')
        this.addElement(label)

        this.w = GuaAnimation.new(game)
        this.w.x = 100
        this.w.y= 200
        this.addElement( this.w)
        this.setupInputs()
    }
    // draw() {//或者不写draw方法 会自动调用父类的方法
    //     super.draw()
    // }
    // update() {
    //     super.update()
    // }
    setupInputs(){
        var self = this
        self.game.registerAction('KeyA',function (keyStatus) {
            self.w.move(-4,keyStatus)
        })
        self.game.registerAction('KeyD',function (keyStatus) {
            self.w.move(4,keyStatus)
        })
    }
}