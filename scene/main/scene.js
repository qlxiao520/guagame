class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        var self = this
        var g = this.game
        this.numberOfEnemies = 10
        this.bg = GuaImage.new(g,'sky')
        this.cloud = Cloud.new(g)
        this.player = Player.new(g)
        var ps = GuaParticleSystem.new(g)
       

        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)
        this.addElement(ps)
        this.addEnemies()
    }
    addEnemies(){
        var g = this.game
        var es = []
        for (var index = 0; index < this.numberOfEnemies; index++) {
            var e = Enemy.new(g);
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es
    }
    setupInputs() {
        var self = this
        var g = this.game

        g.registerAction('KeyA', function () {

            self.player.moveLeft()
        })

        g.registerAction('KeyD', function () {
            self.player.moveRight()
        })

        g.registerAction('KeyW', function () {
            self.player.moveUp()
        })
        g.registerAction('KeyS', function () {
            self.player.moveDown()
        })
        g.registerAction('KeyF', function () {
            self.player.fire()
        })
    }
    // draw() {//在父类自动draw
    //draw bg
    // this.game.drawImage(this.bg)
    // this.game.drawImage(this.player)
    // this.game.drawImage(this.cloud)
    // this.game.drawImage(this.enemy)
    // }
    update() {
        super.update()
    }
}

const config = {
    player_speed:10,
    cloud_speed:1,
    enemy_speed:5,
    bullet_speed:5,
    fire_cooldown:5,
}

//逻辑上来说 不应该继承GuaImage 但就这么做吧
class Bullet extends GuaImage{
    constructor(game){
        super(game,'bullet')
        this.setup()
    }
    setup(){
        // this.speed = 10
        this.speed = config.bullet_speed
    }
    update(){   
        this.y -= this.speed
    }
}
class Player extends GuaImage {
    constructor(game, name) {
        super(game, 'player')
        this.setup()
    }
    setup(){
        // this.speed = 10
        this.x = 100
        this.y = 250
        this.cooldown  = 0
    }
    fire(){
        if(this.cooldown == 0){
            this.cooldown = config.fire_cooldown
            
            var x = this.x+this.w/2
            var y = this.y
            var b = Bullet.new(this.game)
            b.x=x
            b.y=y
            this.scene.addElement(b)
        }
    }
    update(){
        this.speed = config.player_speed
        if(this.cooldown>0){
            this.cooldown--
        }
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
        super(game, 'cloud')
        this.setup()
    }
    setup(){
        this.x  = randomBetween(0,480-this.w)
        this.y  = randomBetween(0-this.h,-200-this.h)
        this.speed = 1
    }
    update(){
        this.y += this.speed
        if(this.y>1000){
            this.setup()
        }
    }
    debug(){
        this.speed = config.cloud_speed
    }
}
class Enemy extends GuaImage {
    constructor(game, name) {
        var type = randomBetween(0,4)
        var name = 'enemy'+type
        super(game, name)
        this.setup()
    }
    setup(){

        this.speed = randomBetween(2,5)

        this.x  = randomBetween(0,480-this.w)
        this.y  = randomBetween(50-this.h,-500-this.h)
        log(this.speed,this.x,this.y)
    }
    update(){
        this.y+=this.speed
        if(this.y>1000){
            this.setup()
        }
    }
}




