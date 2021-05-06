
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;
var scienceLabImg;
var stand1,stand2,stand3;
var scientist,scientistImg;
var back;

function preload(){
	scienceLabImg=loadImage("science lab.png");
	scientistImg=loadImage("scientist.png");
}


function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);


    stand1=createSprite(300,540,420,20);
	stand2=createSprite(90,500,20,320);
	stand3=createSprite(520,500,20,320);
    stand4=createSprite(300,630,420,20);

    

	scientist=createSprite(720,500,10,10);
	scientist.addImage(scientistImg);
	scientist.scale=0.90;


	
	stand1.shapeColor="brown";
	stand2.shapeColor="brown";
	stand4.shapeColor="brown";
	stand3.shapeColor="brown";
	


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(300,400,200,20);
	bob1 = new bob(200,500,40)
	bob2 = new bob(250,500,40)
	bob3 = new bob(300,500,40)
	bob4 = new bob(360,500,40)
	bob5 = new bob(360,500,40)
	
	
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	rope3=new rope(bob3.body,roofObject.body,-5, 0)
	rope4=new rope(bob4.body,roofObject.body,80, 0)
	rope5=new rope(bob5.body,roofObject.body,40, 0)
	
	
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(scienceLabImg);

  
   fill("red");
   stroke("white");
   strokeWeight(15);
   textSize(30);
   text("Newton's Cradle",460,300);

  

  
  

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  


  
  drawSprites();
 
}

  
function keyPressed(){
  
	if(keyCode === UP_ARROW){
   Matter.Body.applyForce(bob1.body,bob1.body.position,{
		   x:-50,y:-45
	   });
   
	}
   
   
   }












