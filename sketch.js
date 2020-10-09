
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObj,dustbinObj,groundObj;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObj = new Paper(200,450,40);
	groundObj = new Ground(width/2,670,width,20)
    dustbinObj = new Dustbin(1200,650,200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObj.display();
  groundObj.display();
  dustbinObj.display();
}
function keyPressed(){
    if(keyCode === UP_ARROW){

		Body.applyForce(paperObj.body,paperObj.body.position,{x:360,y:-360})
	}

}


