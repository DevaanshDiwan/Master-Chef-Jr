
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
	dustbin= new  dustbin(720,390,100,10);
	paper= new Paper(100,300,10);
	ground=Bodies.rectangle(width/2,400,width,10)
}

{
  isStatic : true
  
  world.add(world,ground)


}
function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin.display();
  paper.display();
 
}

function keyPressed(){

	if(keyCode===Up_Arrow){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85}); 
	}



}