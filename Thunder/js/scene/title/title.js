class SceneTitle extends Scene{
	
    constructor(game){
        super(game)
           
        
    }
    draw(){
        super.draw()
		this.game.context.font = "15px Consolas"
		this.game.context.fillText('Press k to start game', 400, 300)        
    }
}