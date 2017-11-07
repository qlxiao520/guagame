// var loadLevel = function (game,n) {
//     n = n - 1
//     var level = levels[n]
//     var blocks = []
//     for (let i = 0; i < level.length; i++) {
//         var p = level[i]
//         var b = Block(game, p)
//         blocks.push(b)
//     }
//     return blocks
// }

// var blocks = [] 
// var enableDebugMode = function (game, enable) {
//     if (!enable) {
//         return
//     }
//     window.paused = false
//     window.addEventListener('keydown', function (event) {
//         let k = event.code
//         log(k)
//         if (k == 'KeyP') {
//             //debug  暂停
//             window.paused = !window.paused
//         } else if ('Digit1Digit2Digit3Digit4Digit5Digit6Digit7'.includes(k)) {
//             //debug  载入关卡
//             blocks = loadLevel(game, Number(k[5]))
//         }
//     })
    //控制速度
//     document.querySelector('#id-input-speed').addEventListener('input', function (event) {
//         var input = event.target
//         // log(input.value)
//         window.fps = Number(input.value)
//     })


// }
var _main = function () {


    var images = {
        bullet: 'img/dafeiji/bullet1.png',
        cloud: 'img/dafeiji/cloud1.png',
        player: 'img/dafeiji/hero1.png',
        sky:'img/dafeiji/background.png',
        enemy4:'img/dafeiji/enemy2.png',
        enemy3:'img/dafeiji/enemy1.png',
        enemy2:'img/dafeiji/enemy0.png',
        enemy1:'img/dafeiji/enemy0.png',
        enemy0:'img/dafeiji/enemy0.png',
        fire:'img/dafeiji/bullet.png',
    }


    //在images初始化完毕之后 异步的调用function(g)
    var game =GuaGame.instance(30, images, function (g) {
        //所有图片调用完毕之后
        // var s = sceneTitle.new(g)
        var s = Scene.new(g)
        g.runwithScene(s)
    })

    // enableDebugMode(game, true)
}

_main()

