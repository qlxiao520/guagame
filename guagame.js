var GuaGame = function (fps) {
    var g = {
        actions: {},   //哪些键被注册了事件
        keydowns: {},  //被按下按键的状态
    }
    var canvas = document.querySelector('#id-canvas')
    if (canvas.getContext) {
        var context = canvas.getContext('2d')
        g.canvas = canvas
        g.context = context
        g.drawImage = function (guaImage) {
            g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
        }
        g.registerAction = function (keycode, callback) {  //注册按键事件
            g.actions[keycode] = callback
        }
        //events
        window.addEventListener('keydown', function (event) {
            g.keydowns[event.code] = true
        })
        window.addEventListener('keyup', function (event) {
            g.keydowns[event.code] = false
        })
        //timer
        setInterval(function () {
            //event    Object.keys()返回一个由给定对象自身属性组成的数组
            var actions = Object.keys(g.actions)//获取 keycode数组
            for (var i = 0; i < actions.length; i++) {
                var keycode = actions[i]
                if (g.keydowns[keycode]) {
                    //按键被按下 调用注册的函数
                    g.actions[keycode]()
                }
            }
            //update
            g.update()
            //clear
            context.clearRect(0, 0, canvas.width, canvas.height)
            //draw
            g.draw()
        }, 1000 / fps)


    }

    return g
}
