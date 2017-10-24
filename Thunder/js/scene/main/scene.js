const config = {
	player_speed: 5,
	bullet_speed: 5,
	background_speed: 1,
}

class SceneMain extends Scene {

	constructor(game) {
		super(game)
		

		// game.registerAction('k',function(){
		//     var scene=SceneMain(game)
		//     game.scene=scene
		// }
		this.setup()
		this.setupInputs()
	}

	setup() {
		this.numOfEnemies = 5
		this.enemies = []
		this.bg1 = new myImage(this.game, 'background')
		this.bg2 = new myImage(this.game, 'background')
		this.bg2.y = -this.bg2.texture.height
		this.player = new Player(this.game, 180, 600)
		this.enemy = new Enemy(this.game)
		this.numOfElements = 8

		// this.game.registerAction('f', function () {
		//   ball.fire()
		// })

		this.addElement(this.bg1)
		this.addElement(this.bg2)
		this.addElement(this.player)
		this.addEnemies()

		
		$('.whole').hide()
		$('.component').hide()
		this.bindAll('#whole-speed','change',function(event){
			var input = event.value.newValue
			fps=input
			$(event.target).parent().find('.speed').text(input)
		})

		this.bindAll('.auto-slider', 'change', function (event) {
			var target=event.target
			var targetVal = target.value
			eval(target.dataset.speed + '=' + targetVal)
			$(target).parent().find('.speed').text(targetVal)
		})
	}

	bindAll(selector,eventName,callback) {
		$(selector).slider({
			formatter: function (value) {
				return 'Current value: ' + value;
			}
		}).on(eventName, function (event) {
			callback(event)
		})
	}

	addEnemies() {
		var es = []
		for (var i = 0; i < this.numOfEnemies; i++) {
			var e = new Enemy(this.game)
			es.push(e)
			this.addElement(e)
		}
		this.enemies = es
	}

	setupInputs() {
		var g = this.game
		var p = this.player
		g.registerAction('a', () => {
			p.moveLeft()
		})
		g.registerAction('d', () => {
			p.moveRight()
		})
		g.registerAction('w', () => {
			p.moveUp()
		})
		g.registerAction('s', () => {
			p.moveDown()
		})
		g.registerAction('j', () => {
			p.fire()
		})
	}

	update() {
		super.update()
		this.backgroundScroll()

	}

	backgroundScroll() {
		var bg1 = this.bg1
		var bg2 = this.bg2
		bg1.y += config.background_speed
		bg2.y += config.background_speed
		if (bg1.y == bg1.texture.height) {
			bg1.y = -bg1.texture.height
		}
		if (bg2.y == bg2.texture.height) {
			bg2.y = -bg2.texture.height
		}
	}

}


// var SceneMain = function (game) {
// 	//初始化
// 	var paddle = Paddle(game)
// 	var ball = Ball(game)
// 	// var blocks = loadLevel(game, 1)

// 	var score = 0

// 	var s = {
// 		game: game,
// 		draw: function () {
// 			game.drawImage(paddle)
// 			game.drawImage(ball)

// 			// for (var i = blocks.length - 1; i >= 0; i--) {
// 			// 	var block = blocks[i]
// 			// 	if (block.alive) {
// 			// 		game.drawImage(block)
// 			// 	}
// 			// }

// 			game.context.font = "15px Consolas"
// 			game.context.strokeText('score:' + score, 10, 570)
// 		},
// 		update: function () {
// 			if(paused){
// 				return 
// 			}
// 			ball.move()
// 			//判断相撞
// 			if (paddle.collidey(ball)) {
// 				ball.reboundy()
// 			}
// 			//侧面相撞
// 			// if(paddle.collidex(ball)){
// 			// 	ball.reboundx()
//             // }
//             //更新计分板
// 			for (var i = blocks.length - 1; i >= 0; i--) {
// 				var block = blocks[i]
// 				if (block.alive && block.collidey(ball)) {
// 					block.kill()
// 					ball.reboundy()
// 					score += 100
// 				}
//             }
//             //判断游戏结束
//             if(ball.y+ball.height/3>paddle.y){
//                 var end=new SceneEnd(game)
//                 game.scene=end
//             }
// 		}
// 	}

// 	paused = false
// 	//key event
// 	game.registerAction('a', function () {
// 		paddle.moveLeft()
// 	})
// 	game.registerAction('d', function () {
// 		paddle.moveRight()
// 	})
// 	game.registerAction('f', function () {
// 		ball.fire()
// 	})
// 	window.addEventListener('keydown', function (event) {
// 		var k = event.key
// 		if (k == 'p') {
// 			log(1)
// 			paused = !paused
// 		}
// 		// } else if ('123456789'.includes(k)) {
// 		// 	blocks = loadLevel(game, Number(k))
// 		// }
// 	})

// 	//mouse event
// 	var enableDrag = false
// 	game.canvas.addEventListener('mousedown', event => {
// 		var x = event.offsetX
// 		var y = event.offsetY
// 		if (ball.hasPoint(x, y)) {
// 			enableDrag = true
// 		}
// 	})
// 	game.canvas.addEventListener('mousemove', event => {
// 		var x = event.offsetX
// 		var y = event.offsetY
// 		//是否点中ball
// 		if (enableDrag) {
// 			ball.x = x
// 			ball.y = y
// 		}
// 	})
// 	game.canvas.addEventListener('mouseup', event => {
// 		enableDrag = false
// 	})

// 	//slide bar
// 	$('#input-speed').slider({
// 		formatter: function (value) {
// 			return 'Current value: ' + value;
// 		}
// 	}).on('change', function (e) {
// 		//当值发生改变的时候触发  
// 		//console.info(e);  
// 		//获取旧值和新值  
// 		var input = e.value.newValue
// 		if (input == 0) {
// 			paused = true
// 		} else {
// 			paused = false
// 			fps = input
// 		}
// 		log(fps)
// 	})
// 	return s
// }