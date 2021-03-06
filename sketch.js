const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;
 
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score = 0;
var particle;
var turn = 0
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  stroke("yellow");
      strokeWeight(4);
      line(0,460,800,460); 
      
      
      stroke(0)
  textSize(20)
  text("Score : "+score,25,30);

  textSize(30);
      text(" 500 ", 5, 550);
      text(" 300 ", 80, 550);
      text(" 100 ", 160, 550);
      text(" 200 ", 240, 550);
      text(" 500 ", 320, 550);
      text(" 300 ", 400, 550);
      text(" 400 ", 480, 550);
      text(" 100 ", 560, 550);
      text(" 200 ", 640, 550);
      text(" 100 ", 720, 550);

      

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }

   if(particle!=null)
   {
      particle.display();
   }
       
   
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();


if(particle!=null)
{
particle.display()

if(particle.body.position.y>760)
{
if(particle.body.position.x<300)
{
score=score+500;
particle=null;
if(turn>=5) gameState = "end";
}
}
}

if(particle!=null)
{
particle.display()

if(particle.body.position.y<600)
{
if(particle.body.position.x>301)
{
score=score+500;
particle=null;
if(turn>=5) gameState = "end";
}
}
}
if(particle!=null)
{
particle.display()

if(particle.body.position.y<900)
{
if(particle.body.position.x>601)
{
score=score+500;
particle=null;
if(turn>=5) gameState = "end";
}
}
}
   }
  }
function mousePressed()
{
if(gameState!=="end")
{
turn++;
particle=new Particle(mouseX,10,10,10)
}
}
