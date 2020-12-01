class Dustbin{
constructor(x,y,width,height){
    var options={
     'isStatic':true
    }
    this.bodyA=Bodies.rectangle(x,y,width,height);
    World.add(world,this.bodyA);
    this.body1= Bodies.rectangle((x-(width/2))),(y-(height*2)),  width(this.body1.width),height(this.body1.height);
    World.add(world,this.body1)
    this.bodyB=bodies.rectangle((x+(widtth/2))),(y-(height*2)), width(this.bodyBwidth,height(this.bodyB.height));
    World.add(world,this.bodyB)
    this.bodyA.width=width
    this.bodyA.height=height
}

display(){
fill("white")
this.bodyA;
this.bodyB;
this.body1;


}
}