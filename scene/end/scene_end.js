var sceneEnd = function (game) {
    var s = {
        g: game,
    }

    game.registerAction('KeyR', function () {
        var s = sceneTitle.new(game)
        game.replaceScene(s)
    })

    s.update = function () {
    }
    s.draw = function () {
        game.context.fillStyle = "black"
        game.context.fillText('游戏结束,按r返回标题界面', 100, 290)
    }
    return s
}