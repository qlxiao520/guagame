var loadLevel = function (game,n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (let i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

var blocks = [] 
var enableDebugMode = function (game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function (event) {
        let k = event.code
        log(k)
        if (k == 'KeyP') {
            //debug  暂停
            window.paused = !window.paused
        } else if ('Digit1Digit2Digit3Digit4Digit5Digit6Digit7'.includes(k)) {
            //debug  载入关卡
            blocks = loadLevel(game, Number(k[5]))
        }
    })
    //控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function (event) {
        var input = event.target
        // log(input.value)
        window.fps = Number(input.value)
    })


}
var _main = function () {


    var images = {
        ball: 'img/ball.png',
        block: 'img/block.png',
        paddle: 'img/paddle.png',
    }


    //在images初始化完毕之后 异步的调用function(g)
    var game =GuaGame.instance(30, images, function (g) {
        //所有图片调用完毕之后
        var s = sceneTitle.new(g)
        g.runwithScene(s)
    })

    enableDebugMode(game, true)
}

_main()

