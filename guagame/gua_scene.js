class GuaScene{
    constructor(game){
        this.game = game
        this.debugModeEnable = true
        this.elements = []
    }
    static new(game){
        return new this(game)
    }
    addElement(img){
        img.scene = this//让scene里的element拿到自己的父类
        this.elements.push(img)
    }
    draw(){
        // for (var index = 0; index < this.elements.length; index++) {
        //     var e = this.elements[index]
        //     this.game.drawImage(e)  
        // }
        for(var e of this.elements){
            e.draw()
        }
    }
    update(){
        if(this.debugModeEnable){
            for (var index = 0; index < this.elements.length; index++) {
                var e = this.elements[index]
                e.debug&&e.debug()
            }
        }
        for (var index = 0; index < this.elements.length; index++) {
            var e = this.elements[index]
            e.update()
        }
    }
}

