
//creating wall and thickness
var wall,thickness;
//creating bullet,speed and wright
var bullet,speed, weight;



function setup() {
  //canvas height and width
  createCanvas(1600,400);
  //randomising thickness
  thickness = random(22,83);

  
  bullet=createSprite(500, 200, 50, 50);
  bullet.shapeColor="#ffffff";
  wall=createSprite(800,200,50,100);

wall.shapeColor="#ffffff";
  
  
  
  speed=random(223,321);
  
  weight=random(30,52);
  
  bullet.velocityX=20
  
  
 
}

function draw() {
  background(0);  
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);


if(damage>10){
  //createSprite(300, 100, 50, 50);
  wall.shapeColor = ("green");
}
if(damage<10){
  //createSprite(300, 100, 50, 50);
  wall.shapeColor = ("red");
}
}
  drawSprites();
}


function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.width+lbullet.x;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}