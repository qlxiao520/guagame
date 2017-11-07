class GuaGame {
    constructor(fps, images, runCallback) {

        window.fps = fps
        this.images = images
        this.runCallback = runCallback

        this.init()

        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')

        var self = this
        //events
        window.addEventListener('keydown', function (event) {
            self.keydowns[event.code] = 'down'
        })
        window.addEventListener('keyup', event => {
            this.keydowns[event.code] = 'up'
        })

    }
    static instance(...args){
        this.i = this.i ||new this(...args)
        return this.i
    }
    init() {
        var g = this
        var loads = []
        var names = Object.keys(g.images)
        //预先载入所有图片
        for (var index = 0; index < names.length; index++) {

            let name = names[index];
            var path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function () {
                //存入g.images中
                log(name)
                /**当你for循环结束时，三个图片都没有加载完。
                由于你用var定义了name,此时name就是一个全局变量，
                for循环结束时，name的值为最后一个值。
                当有图片加载完成时调用onload，g.images[name] = img的name就是最后一个值。
                而let是块级作用域中的变量，三个name值不同。*/
                g.images[name] = img
                //所有图片成功载入之后,调用run+
                log('load images')
                loads.push(1)
                if (loads.length == names.length) {
                    log(g.images)
                    g.__start(g)

                }
            }
        }

    }
    drawImage(img) {
        //img是一个 guaImage
        this.context.drawImage(img.texture, img.x, img.y)
    }

    update() {
        this.scene.update()
    }
    draw() {
        this.scene.draw()
    }
    registerAction(keycode, callback) {
        this.actions[keycode] = callback
    }

    runloop() {
        // log(window.fps)
        var g = this
        //event    Object.keys()返回一个由给定对象自身属性组成的数组
        var actions = Object.keys(g.actions)//获取 keycode数组
        for (var i = 0; i < actions.length; i++) {
            var keycode = actions[i]
            var keyStatus = g.keydowns[keycode]
            if (keyStatus=='down') {
                //按键被按下 调用注册的函数
                g.actions[keycode]('down')
            }else if(keyStatus=='up'){
                g.actions[keycode]('up')
                //删除按键的状态
                g.keydowns[keycode]=null
            }
        }
        //update
        g.update && g.update() //js的hack 存在update则执行update
        //clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        //draw
        g.draw()
        //next runloop

        setTimeout(function () {
            g.runloop()
        }, 1000 / window.fps)

    }
    textureByName(name) {
        var g = this
        var img = g.images[name]

        // var image = {
        //     w: img.width,
        //     h: img.height,
        //     image: g.images[name]
        // }
        return img
    }
    __start(g) {
        this.runCallback(g)
    }

    runwithScene(scene) {
        var self = this
        this.scene = scene
        //timer
        setTimeout(function () {
            self.runloop()
        }, 1000 / window.fps)
    }
    replaceScene(scene) {
        this.scene = scene
    }
}