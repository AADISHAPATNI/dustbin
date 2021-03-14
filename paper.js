class Paper{
    constructor(x,y,width,height){
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2,
            isStatic:false,
        }

        
    }
    display(){
        
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
    }
}