var Paddle = function (game) {

    // var image = imageFromPath('paddle.png')
    // var o = {
    //     image: image,
    //     x: 150,
    //     y: 250,
    //     speed: 5,
    // }


    var img = game.imageByName('paddle')
     var o = {
        x: 150,
        y: 250,
        speed: 5,
    }
    o.image = img.image
    o.w = img.w
    o.h = img.h
    o.move = function (x) {

        if (x < 0) {
            x = 0
        }
        if (x > 400 - o.w) {
            x = 400 - o.w
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