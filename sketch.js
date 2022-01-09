const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine;
let world;
var fort
var explosions=[]
var enemies=[]
var score=0
function preload()
{
  bg_img = loadImage('bg.png');
 
}
function setup() {
  
    createCanvas(windowWidth,windowHeight);
  
    angleMode(DEGREES)
    angle=PI/4
    engine = Engine.create();
    world = engine.world;
    fort=new Fort(100,500,300,250)
   tank=new Tank(400,500,250,250)
     mg=new Maingun(500,480,55,55,angle)
  }
  function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);
  fort.display()
  tank.display()
  showenemies()
  textSize(30)
  text("Score:"+score,100,100)
  
  for (var i = 0; i <explosions.length; i++) {
    if (explosions[i] !== undefined) {
explosions[i].display();
    }
  }
  mg.display()
  Engine.update(engine);
  
}
function showExplosions(){
  if(explosion){
    explosion.display()
  }
}
function keyPressed() {
  if (keyCode === 32) {
 

      var explosion = new Explosion(mg.x,mg.y);

     
    
      explosions.push(explosion);
      
    }
  }
  
  function keyReleased() {
    if (keyCode === 32) {
      if (explosions.length) {
       
        explosions[explosions.length - 1].shoot();
      }
    }
  }

function showenemies() {
  if(enemies.length>0) {
    if(enemies[enemies.length-1] === undefined || enemies[enemies.length-1].body.position.x < width - 300) {
      var positions = [-40, -60, -70, -20];
      var position = random(positions);
      var enemy = new Enemy(width, height - 100, 170, 170, position);
      enemies.push(enemy);
    }
    for (var i = 0; i < enemies.length; i++) {
      if (enemies[i]) {
        Matter.Body.setVelocity(enemies[i].body, {x: -0.9,y: 0});
        enemies[i].display();
      } else {
        enemies[i];
      }
    }
  }
  else {
    var enemy = new Enemy(width, height - 60, 170, 170, -60);
    enemies.push(enemy);
  }
}  
  
  



 

