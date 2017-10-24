class Enemy extends myImage {
    constructor(game) {
        var type = randomBetween(0, 3)
        var name = 'enemy' + type
        super(game, name)
        this.name = name
        this.deadStatus = 0
        this.setup()
    }

    setup() {
        this.speed = randomBetween(2, 4)
        this.x = randomBetween(0, 480 - this.w)
        this.y = -randomBetween(200, 600)
    }

    update() {
        this.y += this.speed
        if (this.y > 852) {
            this.setup()
        }

        var elem = this.scene.elements
        var arrLen = elem.length
        for (var i = this.scene.numOfElements; i < arrLen; i++) {
            if (this.bomb(elem[i]) && !this.deadStatus ) {
                // elem.splice(i,1)
                this.deadStatus=1;
                this.index = i
            }
        }

        if(this.deadStatus>0&&this.deadStatus<12){
            if(this.deadStatus == 1){
                elem.splice(this.index,1) 
            }
            if(this.deadStatus == 3 ||this.deadStatus == 6 ||this.deadStatus ==9){
                var dead = this.name + "_down"+this.deadStatus/3
                this.texture = this.game.textureByName(dead) 
            }
            this.deadStatus++;
        }
        if(this.deadStatus == 12){
            this.texture = this.game.textureByName(this.name)  
            this.deadStatus = 0 
            this.setup()
        }
    }

    

    bomb(bullet) {
        return rectIntersect(this, bullet);
    }
}