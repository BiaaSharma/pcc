const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide, rightSide;
var groundObg;

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
  var ball_options={
	isStatic:false,
    restitution:0.6,
    friction:0,
    density:1.5
    }
    ball=Bodies.circle(100,100,20,ball_options);
    World.add(world,ball);
    leftSide=new Ground(600,640,5,60);
    rightSide=new Ground(700,640,5,60);
    groundObg=new Ground(400,680,800,20);
  }


  



function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObg.display();
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  leftSide.display();
  rightSide.display();
  


}

function keyPressed(){
  if(keyCode==UP_ARROW){
    Body.applyForce(ball,ball.position,{x:60,y:-50});
  }
}