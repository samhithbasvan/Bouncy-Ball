const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 var engine,world;
  var object;
  var ground;
  var ball;
function setup() {
  createCanvas(800,800);

 engine = Engine.create();
 world = engine.world;
var options = {
  isStatic : true
}
ground = Bodies.rectangle(400,780,800,10,options);
World.add(world,ground);
var balloptions = {
 restitution: 1.0
}
ball = Bodies.circle(400,100,50,balloptions);
World.add(world,ball);

}

function draw() {
  background(0); 
  Engine.update(engine) 
fill("white");
ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y,50,50);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,800,10);


drawSprites();
}