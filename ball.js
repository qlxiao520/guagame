var Ball = function () {

    var image = imageFromPath('ball.png')
    var o = {
        image: image,
        x: 1,
        y: 1,
        speedX: 5,
        speedY: 5,
        fired: false,
    }
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
    return o
}