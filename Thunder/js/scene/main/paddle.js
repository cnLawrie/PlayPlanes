var Paddle = function (frame) {
    var img = frame.imageByName('background')
    var o = {
        image: img.image,
        x: 100,
        y: 550,
        width: img.width,
        height: img.height,
        speed: 10,
        moveLeft: function () {
            if (this.x >= 0) this.x -= this.speed
        },
        moveRight: function () {
            if (this.x <= 800 - this.image.width) this.x += this.speed
        },
        // collidex:function(ball){
        // 	return (o.y<=ball.y&&ball.y<=o.y+o.image.height
        // 			&&(ball.x>(o.x-ball.image.width)
        // 			&&ball.x<(o.x+o.image.width)))
        // }
        collidey: function (ball) {
            return rectIntersect(this, ball)
        }
    }

    return o
}