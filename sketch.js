const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
var dustbin1, dustbin2, dustbin3;
var paper;
var ground;
var bg;
var dustbinImg;
var launcher;


function preload() {
	
	dustbinImg = loadImage("dustbinFinal.png");
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);


	dustbin1 = new Dustbin(630, 463, 50, 200);
	dustbin2 = new Dustbin(420, 463, 50, 200);
	dustbin3 = new Dustbin(525.5, 583, 260, 50);
	ground = new Ground(200, 580, 3000, 50);
	paper = new Paper(65, 540, 75);

	launcher=new Launcher(paper.body,{x:200,y:50});

}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(255);
	
	
	dustbin1.display();
	dustbin2.display()
	dustbin3.display()
	ground.display();
	paper.display();
	image(dustbinImg,525,430,200,238);

	launcher.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 600, y: -1000 });
	}
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}


