// var sceneTitle = function (game) {
//     var s = {
//         g: game,
//     }

//     game.registerAction('KeyK', function () {
//         var s = Scene(game)
//         game.replaceScene(s)
//     })

//     s.update = function () {
//     }
//     s.draw = function () {
//         game.context.fillStyle = "black"
//         game.context.fillText('按k开始游戏', 100, 290)
//     }
//     return s
// }
class sceneTitle extends GuaScene{
    constructor(game){
        super(game)
        game.registerAction('KeyK', function () {
            var s = Scene(game)
            game.replaceScene(s)
        })
    }
    draw(){
        this.game.context.fillStyle = "black"
        this.game.context.fillText('按k开始游戏', 100, 290)
    }
}