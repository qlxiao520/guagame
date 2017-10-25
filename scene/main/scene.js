class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        var self = this
        var g = this.game
        this.bg = GuaImage.new(g, 'sky')
        
        this.cloud = Cloud.new(g, 'cloud')
        this.enemy = Enemy.new(g, 'enemy')
        this.player = Player.new(g, 'player')

        this.cloud.y = 50
        this.cloud.x = 200
        this.enemy.y = 50
        this.enemy.x = 100
        this.player.x = 100
        this.player.y = 250
        this.player.speed = 10
   
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
    }
    draw() {//应该自动draw
        //draw bg
        this.game.drawImage(this.bg)
        this.game.drawImage(this.player)
        this.game.drawImage(this.cloud)
        this.game.drawImage(this.enemy)
    }
}

// var Scene = function (game) {
//     var s = {
//         g: game,
//     }

//     var paddle = Paddle(game)
//     var ball = Ball(game)
//     var score = 0
//     var enableDrag = false
//     blocks = loadLevel(game, 1)
//     game.registerAction('KeyA', function () {
//         paddle.moveLeft()
//     })

//     game.registerAction('KeyD', function () {
//         paddle.moveRight()
//     })

//     game.registerAction('KeyF', function () {
//         ball.fire()
//     })

//     game.canvas.addEventListener('mousedown', event => {
//         // log('down',event)
//         if (ball.hasPoint(event.offsetX, event.offsetY)) {
//             enableDrag = true
//         }

//     })
//     game.canvas.addEventListener('mousemove', event => {
//         // log('move',event)+
//         if (enableDrag) {
//             ball.x = event.offsetX
//             ball.y = event.offsetY
//         }
//     })
//     game.canvas.addEventListener('mouseup', event => {
//         // log('up',event)
//         enableDrag = false
//     })


//     s.update = function () {

//         if (paused) {
//             return
//         }

//         ball.move()

//         //判断游戏结束
//         if(ball.y>paddle.y){
//             //跳转到游戏结束
//             var end = sceneEnd(game)
//             game.replaceScene(end)
//         }

//         //判断板子跟球相撞
//         if (paddle.collide(ball)) {
//             // log('paddle相撞')
//             ball.反弹()
//         }

//         //判断球跟block相撞
//         for (let i = 0; i < blocks.length; i++) {
//             if (blocks[i].collide(ball)) {
//                 // log('block相撞')
//                 blocks[i].kill()
//                 ball.反弹()
//                 //更新分数
//                 score += 100
//             }
//         }

//     }
//     s.draw = function () {
//         //draw 背景
//         game.context.fillStyle = "#554"
//         game.context.fillRect(0, 0, 400, 300)
//         //draw
//         game.drawImage(paddle)
//         game.drawImage(ball)
//         //draw block
//         for (let i = 0; i < blocks.length; i++) {
//             if (blocks[i].alive) {
//                 game.drawImage(blocks[i])
//             }

//         }
//         //draw labels
//         game.context.fillStyle = "white"
//         game.context.fillText('分数 :' + score, 10, 290)
//     }
//     return s
// }