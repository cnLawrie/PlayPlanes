class ParticleSystem{
    constructor(game){
        this.game=game
        this.setup()
    }

    set(){
        this.x=150
        this.y=200
        this.numberOfParticle = 20
        this.particles = []
    }

    update(){
        //添加小火花

        //更新小火花
    }

    draw(){
        for(var p of this.particles){
            p.draw()
        }
    }
}

class Particle extends myImage{
    constructor(game,x,y) {
        super(game,'bullet',x,y)
        this.setup()
    }
    setup(){
        
    }

    update(){

    }
}