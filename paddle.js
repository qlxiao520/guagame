var Paddle = function () {

    var image = imageFromPath('paddle.png')
    var o = {
        image: image,
        x: 150,
        y: 250,
        speed: 5,
    }
    o.move = function (x) {

        if (x < 0) {
            x = 0
        }
        if (x > 400 - o.image.width) {
            x = 400 - o.image.width
        }
        o.x = x
    }
    o.moveLeft = function () {
        o.move(o.x - o.speed)

    }
    o.moveRight = function () {
        o.move(o.x + o.speed)

    }
    o.collide = function (b) {
        return rectIntersects(o, b) || rectIntersects(b, o)
    }
    return o
}