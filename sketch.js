
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;

var engine,world;
var paper,ground,dustbinImage;
var dustbin;




function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	
paper=new Paper(200,450,70);
ground=new Ground(width/2,600,width,20);

dustbin=createSprite(900,520);
	

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
Render.run(render);


  
}




function draw() {
 
  background("white");
  rectMode(CENTER);
  paper.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
	}
}


