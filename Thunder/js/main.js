var _main = function () {
	fps = 50
	var images = {
		bullet: 'img/bullet1.png',
		background: 'img/background.png',
		player: 'img/hero1.png',
		enemy0: 'img/enemy0.png',
		enemy0_down1: 'img/enemy0_down1.png',
		enemy0_down2: 'img/enemy0_down2.png',
		enemy0_down3: 'img/enemy0_down3.png',
		enemy1: 'img/enemy1.png',
		enemy1_down1: 'img/enemy1_down1.png',
		enemy1_down2: 'img/enemy1_down2.png',
		enemy1_down3: 'img/enemy1_down3.png',
		enemy2: 'img/enemy2.png',
		enemy2_down1: 'img/enemy2_down1.png',
		enemy2_down2: 'img/enemy2_down2.png',
		enemy2_down3: 'img/enemy2_down3.png',
	}

	var game = new Frame(images, function (g) {
		var scene=new SceneMain(game)

		g.runWithScene(scene)
	})
}

_main()