
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stone,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1000, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(900,200,30);
  mango2 = new Mango(800,150,30);
  mango3 = new Mango(780,130,30);
  mango4 = new Mango(800,230,30);
  mango5 = new Mango(670,210,30);
  stone = new Stone(150,550,30);

	treeObj=new tree(780,600);
	groundObject=new ground(width/2,600,width,20);

	

	elastic = new constraint(stone.body,{x:240, y:450});
	
	Engine.run(engine);
  
}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,365,200,300);
  

  treeObj.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();

 stone.display();
  elastic.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);







}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    elastic.fly();
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
