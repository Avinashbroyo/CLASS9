var box
function setup() {
  createCanvas(800,600);
  box=createSprite(200,200,100,100)
}
function draw() 
{
  background(80,100,130);
  if(keyIsDown(RIGHT_ARROW)){
  box.position.x=box.position.x+2
  }
  if(keyIsDown(LEFT_ARROW)){
  box.position.x=box.position.x-2
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y=box.position.y-2
    }
    if(keyIsDown(DOWN_ARROW)){
      box.position.y=box.position.y+2
      }
drawSprites()
}




