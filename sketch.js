

function preload()
{
  
  
  pacman = loadImage("Pacman.png")

}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  pacman = createSprite(100,50,30,30)
  pacman.addImage(pacman)
  pacman.scale = 0.5;
  pacman.setCollider("rectangle",0,0,200,200)

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;

  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
  {
    pacman.velocity = -2
    
  }

  if(keyCode==DOWN_ARROW)
  {
    pacman.velocity = 2
    
  }

  if(keyCode==LEFT_ARROW)
  {
    pacman.velocity = -2
    
  }

  if(keyCode==RIGHT_ARROW)
  {
    pacman.velocity = 2
    
  }
}

  


