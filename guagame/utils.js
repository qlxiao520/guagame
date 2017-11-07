

var e = sel => document.querySelector(sel)
// var log = function (params) {
//     e('#id-text-log').value += '\n' + params
// }
var log = console.log.bind(console)

var imageFromPath = function (path) {
    var image = new Image()
    image.src = path
    return image
}

var aInb = function (x, x1, x2) {
    return x > x1 && x < x1 + x2
}
var rectIntersects = function (a, b) {

    if (aInb(a.x, b.x, b.w) || aInb(b.x, a.x, a.w)) {

        if (aInb(a.y, b.y, b.h) || aInb(b.y, a.y, a.h)) {
            log('相撞')
            return true
        }
    }
    return false
    log('未相撞')
}

const randomBetween = function (start,end) {
    return Math.floor(start+Math.random()*(end-start+1))
}
