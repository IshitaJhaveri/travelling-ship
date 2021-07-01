var seaImg , sea
var shipImg,ship
function preload()
{
 seaImg = loadImage("sea.png");
 shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png"); 
}

function setup()
{
  createCanvas(1200,600);
  sea = createSprite(600,300,1200,600);
  sea.addImage(seaImg);
  sea.scale = 0.7;
  sea.velocityX = -4;
  ship = createSprite(600,300,500,400);
  ship.addAnimation("ship",shipImg);
  ship.scale = 0.7;
}

function draw()
 {

  background ("blue")
 
  drawSprites();

  if(sea.x < 0)
  {
    sea.x = sea.width/4;
  }
}
