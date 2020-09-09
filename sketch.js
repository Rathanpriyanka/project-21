var bullet,wall;
var speed,random;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(100,50,20,40);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor= color(80,80,80)
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  thickness=Math.round(random(23,83));
}

function draw() {
  background(255,255,255);  
  if(keyDown("right")) {
     bullet.velocityX=speed;
  }
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    console.log(damage);
    if(damage<10) {
        bullet.shapeColor = "green";
     }
     if(damage>10) {
      bullet.shapeColor = "red";
     }
  }
  
  drawSprites();
}

function hasCollided(o1,o2) {
   if(o2.x - o1.x <(o1.width/2 + o2.width/2)) {
       return  true;
   }
   else {
     return false;
   }
  }


