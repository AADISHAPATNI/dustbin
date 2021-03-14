
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(350,600,500,10)

wall1 = new Can(500,610,10,150)
wall2 = new Can(700,610,10,150)
wall3 = new Can(645,688,140,20)

paper = new Paper(100,600,30,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  ground.display();

  wall1.display();
  wall2.display();
  wall3.display();
  paper.display();
  drawSprites();
  function keyPressed(){
	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }
}



