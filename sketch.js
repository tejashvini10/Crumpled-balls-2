
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;

var engine,world;
var paper,ground,paperImage,dustbinImage;
var dustbin1,dustbin2,dustbin3,dustbin;



function preload(){
	dustbinImage=loadImage("sprites/dustbin.png");
	
	
}
function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	
paper=new Paper(200,450,70);
ground=new Ground(width/2,600,width,20);

dustbin=createSprite(900,520);
dustbin.addImage(dustbinImage);

dustbin.scale=0.5;



dustbin1=new Dustbin(600,580,200,20);
dustbin2=new Dustbin(500,515,20,150);
dustbin3=new Dustbin(700,515,20,150);

var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
});

	Engine.run(engine);
  
}




function draw() {
 
  background("white");
  rectMode(CENTER);
  
  paper.display();
  ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 
 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});
	}
}


