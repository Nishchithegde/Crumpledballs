const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1, box2, box3;
var ball;
var ground; 

function setup(){
  var canvas = createCanvas(1200, 600);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,380,1200,20);
/*
  var ball_options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
  }

  ball = Bodies.circle(200, 200, 10, ball_options);
  World.add(world,ball);
*/
  ball = new Ball(200, 200, 20);

  box1 = new Box(900,320,10,100);
  box2 = new Box(1050,320,10,100);
  box3 = new Box(975,365,160,10);
}

function draw(){
  background(0);

  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  ball.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
  
    Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-85});
      
  }
}