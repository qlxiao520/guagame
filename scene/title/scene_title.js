class sceneTitle extends GuaScene{
    constructor(game){
        super(game)

    }
    draw(){
        this.game.context.fillStyle = "black"
        this.game.context.fillText('按k开始游戏', 100, 290)
    }
}