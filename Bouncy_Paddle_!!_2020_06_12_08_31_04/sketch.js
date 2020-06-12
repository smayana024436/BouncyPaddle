var ball, ballImg;
var paddle, paddleImg;

function preload() {
  ballImg = loadImage("ball.png");
  paddleImg = loadImage("paddle.png"); 
}

function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(10,200,10,10);
  paddle = createSprite(380,200,10,20);
  
  /* assign the images to the sprites */
  ball.addImage("ball",ballImg);
  paddle.addImage("paddle",paddleImg);
  paddleImg.scale = 1;
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edge = createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edge[0]);
  ball.bounceOff(edge[2]);
  ball.bounceOff(edge[3]);
  
  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle);
  
  if(ball.x === 100)
  {
  randomVelocity();
  }
    
  paddle.collide(edge[2]);
  paddle.collide(edge[3]);
  
  if(keyDown(UP_ARROW))
  {
     paddle.y = paddle.y - 15;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 15;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  ball.velocityY = random(-8,8);
  
}

