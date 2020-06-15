const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var gnd;

var engine, world;
var box1;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,100,50,50);
    box2 = new Box(240,200,50,100);
    gnd = new Ground(200,380,400,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    
    gnd.display();
   
}