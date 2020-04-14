//declares the variables.
var robothead, robotheadImage, robotbody, robotbodyImage, robothand1, robothand1Image, robothand2, robothand2Image, robotleg2, robotleg2Image, SmallRobotImage, smallrobot, righthandup, righthandupImage, sound1, sound2, sound3; 

//loads the images and the sound files to the variables.
function preload(){
  robotheadImage = loadImage("robothead.jpg");
  
  robotbodyImage = loadImage("robotbody.jpg");
  
  robotlegImage = loadImage("robotleg1.jpg");
  
  robothand1Image = loadImage("robot right hand.jpg");
  
  robothand2Image = loadImage("robot left hand.jpg");
  
  robotleg1Image = loadImage("right leg.jpg"); 
  
  robotleg2Image = loadImage("left leg.jpg");
  
  SmallRobotImage = loadImage("SmallRobot.jpg");
  
  righthandupImage = loadImage("right hand up.jpg");

  soundFormats('mp3', 'ogg');
  sound1 = loadSound('Robby the Robot.mp3');
  sound2 = loadSound('Robot sound 2.mp3');
  sound3 = loadSound('Robot sound 3.mp3');
  
}

function setup() {
  //creates the background by giving its size.
  createCanvas(400, 400);
    
  //creates the different body parts of the robot.
  robothead = createSprite(200, 90, 50, 50); 
  robothead.addImage("robothead", robotheadImage);
  robotheadImage.width = 90;
  robotheadImage.height = 90;
  
  robotneck = createSprite(200, 150, 23, 50);
  
  
  robotbody = createSprite(200, 200, 40, 40);
  robotbody.addImage("robotbody", robotbodyImage);
  robotbodyImage.width = 110;
  robotbodyImage.height = 100;
  
  robotleg1 = createSprite(170, 298);
  robotleg1.addImage("robotleg1", robotleg1Image);
  robotleg1Image.width = 50;
  robotleg1Image.height = 100;
  
  robotleg2 = createSprite(233, 308);
  robotleg2.addImage("robotleg2", robotleg2Image);
  robotleg2Image.width = 50;
  robotleg2Image.height = 120;
  
  robothand1 = createSprite(97, 199, 20, 20);
  robothand1.addImage("robothand1", robothand1Image);
  robothand1Image.width = 100;
  robothand1Image.height = 105;
  
  robothand2 = createSprite(303, 199, 20, 20);
  robothand2.addImage("robothand2", robothand2Image);
  robothand2Image.width = 100;
  robothand2Image.height = 105;
  
  righthandup = createSprite(97, 127, 20, 20);
  righthandup.addImage("righthandup", righthandupImage);
  righthandupImage.width = 100;
  righthandupImage.height = 105;
  righthandup.visible = false;
  
  smallrobot = createSprite(200, 200, 40, 40);
  smallrobot.addImage("smallrobot", SmallRobotImage);
  smallrobot.visible = false;
  smallrobot.setCollider("rectangle", 0, 0, 200, 200);
}

function draw() {
  //gives the background colour.
  background(220);
  
  //gives the colour to the neck of the robot.
  robotneck.shapeColor = "blue";
  
  //moves the robot along with the mouse cursor movement.
  robothead.x = mouseX;
  robotneck.x = robothead.x;  
  robotbody.x = robothead.x;
  robothand1.x = robotbody.x - 103;
  robothand2.x = robotbody.x + 103;
  righthandup.x = robotbody.x - 103;
  robotleg1.x = robotbody.x - 30;
  robotleg2.x = robotbody.x + 33;
  smallrobot.x = mouseX;
  
  //moves the right hand of the robot up and also plays    a sound when the forehead of the robot is pressed.
 if(mousePressedOver(robothead)){
    righthandup.visible = true
    robothand1.visible = false;
    sound1.play();
  }
  
  //reduces the size of the robot and also plays a sound    when the body(torso) of the robot is pressed.
  if(mousePressedOver(robotbody)){
    sound3.play();
    smallrobot.visible = true;
    robothead.visible = false;
    robotneck.visible = false;
    robotleg1.visible = false;
    robotleg2.visible = false;
    robothand1.visible = false;
    robothand2.visible = false;
    robotbody.visible = false;
    righthandup.visible = false;
    
  } 
  
   //makes the robot come back to its normal size and also plays a sound when thre robot's head is pressed.    
   else if(mousePressedOver(smallrobot)){
           robothead.visible = true;
           robotneck.visible = true;
           robotleg1.visible = true;
           robotleg2.visible = true;
           robothand1.visible = true;
           robothand2.visible = true;
           robotbody.visible = true;
           smallrobot.visible = false;  
           righthandup.visible = false;
           sound2.play();
  }
    
  
  //creates the edges of the screen.
  createEdgeSprites();
  
  //draws the sprites.
  drawSprites();
}