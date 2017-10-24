class Bullet extends myImage{
    constructor(game,x,y) {
        super(game,'bullet',x,y)
        this.setup()
    }
    setup(){
        this.speed = config.bullet_speed  
    }

    update(){
        this.y -= this.speed
        this.speed = config.bullet_speed
        //子弹飞出边界后，从数组中删除
        if(this.y <= 0){
            var index = this.scene.elements.indexOf(this)                  
            this.scene.elements.splice(index,1)
        }
    }
}