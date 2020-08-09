var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var play =1;
  var end = 2,
  count = 0;

  var particle;

var  turn = 0;
 
var particles = [];
var plinkos = [];
var divisions = [];
var gameState = play;
var divisionHeight=300;
var score =0;
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
  textSize(20)
  text("Score : "+score,20,30);
  text("500",20,600);
  text("400",100,600);
  text("300",180,600);
  text("200",260,600);
  text("100",340,600);
  text("100",420,600);
  text("200",500,600);
  text("300",580,600);
  text("400",660,600);
  text("500",740,600);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  // mousePressed();
  if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){
      if(particle.body.position.x<80){
        score=score+500;
        /*particle=null;*/}
        if(particle.body.position.x>80&&particle.body.position.x<160){
          score=score+400;
          /*particle=null;*/}
        if(count>5){gameState=end;}
      
    }
  }

}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle = new Particle(mouseX,10,10);
  }
}