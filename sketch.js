const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,object,ground;

function setup() {
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;
var option={
  isStatic:true
}
var option1={
  restitution:5.0
}
object = Bodies.circle(200,100,50,option1);
World.add(world,object)
ground = Bodies.rectangle(200,390,200,20,option);
World.add(world,ground);

}

function draw() {
  background(0);  
  Engine.update(engine);
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,20) 
 circle(object.position.x,object.position.y,50) 
}