var log = console.log.bind(console)

var imageFromPath = function (path) {
    var image = new Image()
    image.src = path
    return image
}
var rectIntersects = function (a, b) {

    var o = a

    if (b.y > o.y && b.y < o.image.height + o.y) {

        if (b.x > o.x && b.x < o.x + o.image.width) {
            log('相撞')
            return true
        }
    }
    return false
    log('未相撞')
}
