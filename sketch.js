
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var trash;
var box1,box2,box3;

function preload()
{
	db = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,650,800,20)
    trash= new Paper(100,600,40)
    box1=new Dustbin(500,565,20,150);
    box2=new Dustbin(600,630,200,20);
    box3=new Dustbin(700,565,20,150);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  trash.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
  image(db,100,100,100,100);
 
}

function keyPressed(){

if(keyCode===UP_ARROW){

Matter.Body.applyForce(trash.body,trash.body.position,{x:50,y:-85});
}
}



