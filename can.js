class Can{
    constructor(x,y,width,height){
        var objects = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,objects);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        fill("grey");
        
    }
}