
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,left_wall,right_wall;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2,670,width,10);
	left_wall=new Ground(1000,600,10,120);
	right_wall=new Ground(1200,600,10,120);

	var ball_options={
		isStatic:false,
		restitution:0.95,
		friction:1.0,
		density:1.2,
	}

	//Create the Bodies Here.
	ball=Bodies.circle(50,650,20,ball_options);
	World.add(world,ball);

	
	

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.show();
  left_wall.show();
  right_wall.show();

  ellipse(ball.position.x,ball.position.y,25);
	
  Engine.update(engine)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-60})
	}
}

