var Ball = function (game) {

    // var image = imageFromPath('ball.png')
    // var o = {
    //     image: image,
    //     x: 100,
    //     y: 200,
    //     speedX: 5,
    //     speedY: 5,
    //     fired: false,
    // }
    var img = game.imageByName('ball')
    var o = {
        x: 100,
        y: 200,
        speedX: 5,
        speedY: 5,
        fired: false,
    }
    o.image = img.image
    o.w = img.w
    o.h = img.h
    o.move = function () {
        if (o.fired) {
            if (o.x < 0 || o.x > 400) {
                o.speedX = -o.speedX
            }
            if (o.y < 0 || o.y > 300) {
                o.speedY = -o.speedY
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.fire = function () {
        o.fired = true
    }
    o.反弹 = function () {
        o.speedY *= -1
    }
    o.hasPoint = function(x,y){
        var xIn = x >= o.x && x <= o.x + o.w
        var yIn = y >= o.y && y <= o.y + o.h
        return xIn && yIn
    }
    return o
}