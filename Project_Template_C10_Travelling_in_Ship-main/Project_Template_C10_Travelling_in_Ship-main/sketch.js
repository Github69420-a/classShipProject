
var seaImage;
var boat;
var boatAnim;
var sea;
function preload(){
  boatAnim = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400, 400);
  sea = createSprite(0, 180, 100, 100);
  sea.addImage("test",seaImage);
  boat = createSprite(315, 315, 25, 25);
  boat.addAnimation("test", boatAnim);
  boat.scale = (0.125);
}

function draw() {
  background("lightblue");
  drawSprites();
  text(mouseX +","+ mouseY, mouseX, mouseY);
  sea.velocityX = 2;
  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }
}