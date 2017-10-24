class SceneEnd extends Scene {
	
	constructor(game){
		super(game)
		this.game=game
		game.registerAction('r',function(){
			game.scene=new SceneTitle(game)
		})
	}
	draw() {
		this.game.context.font = "15px Consolas"
		this.game.context.fillText('Game Over ', 400, 300)
		this.game.context.fillText('press r to restart ', 400, 320)
	}
}