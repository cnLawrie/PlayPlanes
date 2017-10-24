class Player extends myImage{
    constructor(game,x,y) {
        super(game,'player',x,y)
        this.setup()
    }

    setup(){
        this.cooldown=0
        this.speed=config.player_speed  
    }
    
    fire(){
        if(this.cooldown!=0){
            return
        }
        this.cooldown=10
        var x=this.x+this.w/2
        var y=this.y
        var b=new Bullet(this.game,x,y)
        this.scene.addElement(b)
    }

    moveLeft(){
        this.x -= this.speed
    }

    moveRight(){
        this.x += this.speed
    }
    moveUp(){
        this.y -= this.speed
    }

    moveDown(){
        this.y += this.speed
    }

    update(){
        if(this.cooldown>0){
            this.cooldown--            
        }
        this.speed=config.player_speed                        
    } 

}
