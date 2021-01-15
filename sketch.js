var prince,princei;
var fireball,fireballi;
var chimney1,chimney1i;
var chimney2,chimney2i;
var chimney3,chimney3i;
var chimney4,chimney4i;
var target,targeti;
var waterball1,waterball1i;
var waterball2,waterball2i;
var waterball3,waterball3i;
var waterball4,waterball4i;
var invisible,ini;
var invisible2,ini2;
var invisible3,ini3;
var invisible4,ini4;
var waterballs;
var chimneys;
var fire,firei;
var lifecount=3;
var lifesprites;
var score;
var hearti;
var sound,sound2;
var gameState="Play";
var button;
var princess,princessi;
var edges;
var invis;
function preload(){
princei=loadImage("prince2.png");
fireballi=loadImage("fireball2.png");
chimney1i=loadImage("chim.jpg");
chimney2i=loadImage("chim2.jpg");
chimney3i=loadImage("chim.jpg");
chimney4i=loadImage("chim2.jpg");
targeti=loadImage("candlee.jpg");
waterball1i=loadImage("waterball22.jpg");
waterball2i=loadImage("waterball11.jpg");
waterball3i=loadImage("waterball22.jpg");
waterball4i=loadImage("waterball11.jpg");
ini=loadImage("invisibleprince.jpg");
ini2=loadImage("invisibleprince.jpg");
ini3=loadImage("invisibleprince.jpg");
ini4=loadImage("invisibleprince.jpg");
firei=loadImage("flameedited.jpg");
sound=loadSound("Jayu kutti.m4a");
sound2=loadSound("Voice 010.m4a");
princessi=loadImage("princess.png");
}
function setup(){
createCanvas(1900,800);
fire=createSprite(1370,240);
  fire.addImage(firei)
  fire.visible=false;
  fire.scale=0.3;
  
score=0
prince=createSprite(170,350,50,50);
prince.addImage(princei);
prince.scale=0.4;

princess=createSprite(1620,380,500,500);
princess.addImage(princessi);
princess.visible=false;
princess.scale=2;

target=createSprite(1370,350,50,50);
target.addImage(targeti);
target.scale=0.5;
fire.depth=target.depth+1;


fireball=createSprite(40,262,50,50);
 fireball.addImage(fireballi);
fireball.scale=0.2;


waterball1=createSprite(520,10,50,50);
 waterball1.addImage(waterball1i);
waterball1.scale=0.5;
waterball1.velocityY=6;


waterball2=createSprite(570,670,50,50);
 waterball2.addImage(waterball2i);
waterball2.scale=0.5;
waterball2.velocityY=-6;


waterball3=createSprite(900,10,50,50);
 waterball3.addImage(waterball3i);
waterball3.scale=0.5;
waterball3.velocityY=6;

waterball4=createSprite(950,690,50,50);
 waterball4.addImage(waterball4i);
waterball4.scale=0.5;
waterball4.velocityY=-6;

chimney1=createSprite(540,72,50,50);
 chimney1.addImage(chimney1i);
chimney1.scale=0.5;



chimney2=createSprite(540,730,50,50);
 chimney2.addImage(chimney2i);
chimney2.scale=0.5;

chimney3=createSprite(920,69,50,50);
chimney3.addImage(chimney3i);
chimney3.scale=0.5;

chimney4=createSprite(930,730,50,50);
chimney4.addImage(chimney4i);
chimney4.scale=0.5;

invis=createSprite(target.x,target.y-50,50,50)
invis.visible=false;
}
function draw(){
  // if(gameState==="Start"){
  //   background("white");
  //   fill("black");
  //   textSize(30);
  //   text("Welcome to the game.Imagine that you are a prince from ababua. You have come to the princess's place to marry the princess.",200,300);
  //   text("But you can't marry the princess easily. The princess's father has kept an aiming test for you which has two stages",200,350);
  //   text("and you have to hit the target 3 times. If you get selected in both levels you can marry the princess.All the best and princess is for you!!!",200,400);
  // }
//  console.log(mouseX,",",mouseY);
invis.x=target.x;
invis.y=target.y-80;
fire.x=target.x;
fire.y=target.y-100
console.log(target.y)
  if(gameState==="Play"){
edges=createEdgeSprites();
target.bounceOff(edges);
    background("white");

    //console.log(lifecount)
  
  


  if(keyDown(UP_ARROW)){
    fireball.y=fireball.y-10;
  }
  if(keyDown(DOWN_ARROW)){
    fireball.y=fireball.y+10;
  }
  if(keyDown(RIGHT_ARROW)){
    fireball.x=fireball.x+10
  }
  if(waterball1.y>720){
    waterball1.y=10;
  }
  if(waterball2.y<69){
    waterball2.y=670;
  }
  if(waterball3.y>720){
    waterball3.y=10;
  }
  if(waterball4.y<69){
    waterball4.y=670;
  }
  if(fireball.x===1380){
  
    score=score+1;
    fire.visible=true;
  }
  console.log(fireball.x)
  fill("red");
  textSize(30)

  if(fireball.x>=1380){
    
   
    textSize(30);
    fill("black")
    text("press R to play again",1550,220);
   
  }
  if(keyDown("R")){
    fireball.x=40;
    fire.visible=false;
  }
  if(score===3){
   gameState="middle"

  }

  if(fireball.x===1900){
    fireball.x=width;

    
  }

  if(fireball.isTouching(waterball1)||fireball.isTouching(waterball2)||fireball.isTouching(waterball3)||fireball.isTouching(waterball4)){
    prince.destroy();
  chimney1.destroy();
  chimney2.destroy();
  chimney3.destroy();
  chimney4.destroy();
  fireball.destroy();
  target.destroy(); 
  waterball1.destroy();
  waterball2.destroy();
  waterball3.destroy();
  waterball4.destroy();
// fire.y=-10;

// spelling mistake here it was gamesate
  gameState="end";
  }
    fill("red")
    textSize(30)
    text("Score:"+score,80,62);
    drawSprites();
  }
  if(gameState==="end"){

 

    end(); 
  
   
    
  }
  if(gameState==="middle"){
middle();
  }
} 

function end(){
  background("white");
 
  fill("black");
  fill("red");
  textSize(60);
  text("OOPS!!!",900,300)
sound2.play();
stopSound("Voice 010.m4a");
fill("black");

 

}

function middle(){

  background("white");
  fill("green");
  textSize(60);
  text("Congratulations!!!",700,300);
// sound.play();
// stopSound("Jayu kutti.m4a");

button=createButton("Continue");
button.position(919,354);
button.mousePressed(Level2);
button.visibility="hidden";
princess.visible=true;;
 chimney1.visible=false;
 chimney2.visible=false;
 chimney3.visible=false;
 chimney4.visible=false;
 waterball1.visible=false;
 waterball2.visible=false;
 waterball3.visible=false;
 waterball4.visible=false;
 target.visible=false;
 fireball.x=40;
 fireball.visible=false;
 fire.visible=false;
 prince.x=1379
 prince.y=390;
drawSprites();
  console.log(gameState);


 
}
function Level2(){
  princess.destroy();
  
score=0;
 gameState="Play";
prince.x=132;
prince.y=330;
chimney1.visible=true;
chimney2.visible=true;
chimney3.visible=true;
chimney4.visible=true;
waterball1.visible=true;
waterball2.visible=true;
waterball3.visible=true;
waterball4.visible=true;
target.visible=true;
fireball.visible=true;
 fire.visible=false;
target.velocityY=5
  //  edges= createEdgeSprites();
  //  target.bounceOff(edges);
  if(target.y>800){
    target.velocityY=-5
  }
  if(fireball.isTouching(invis)){
  
   
    fire.visible=true;
  
  }

//  if(gameState==="level2"){
// score=0;
//   button.hide();
//      background("white");
//      prince=createSprite(132,330,50,50);
//      prince.addImage(princei);
//      prince.scale=0.3;
     
//     //  princess=createSprite(808,606,500,500);
//     //  princess.addImage(princessi);
     
     
//    target.visible=true;
     
//      fireball=createSprite(40,262,50,50);
//       fireball.addImage(fireballi);
//      fireball.scale=0.2;
     
     
//     waterball1.visible=true;
//      waterball1.velocityY=6;
     
     
//      waterball2=createSprite(570,670,50,50);
//       waterball2.addImage(waterball2i);
//      waterball2.scale=0.5;
//      waterball2.velocityY=-5;
     
     
//      waterball3=createSprite(900,10,50,50);
//       waterball3.addImage(waterball3i);
//      waterball3.scale=0.5;
//      waterball3.velocityY=6;
     
//      waterball4=createSprite(950,690,50,50);
//       waterball4.addImage(waterball4i);
//      waterball4.scale=0.5;
//      waterball4.velocityY=-5;
     
//      chimney1=createSprite(540,72,50,50);
//       chimney1.addImage(chimney1i);
//      chimney1.scale=0.5;
//      console.log(waterball3.velocityY)
     
     
//      chimney2=createSprite(540,730,50,50);
//       chimney2.addImage(chimney2i);
//      chimney2.scale=0.5;
     
//      chimney3=createSprite(920,69,50,50);
//      chimney3.addImage(chimney3i);
//      chimney3.scale=0.5;
     
//      chimney4=createSprite(930,730,50,50);
//      chimney4.addImage(chimney4i);
//      chimney4.scale=0.5;


   
//      target.velocityY=-3;
    
//      drawSprites();
//  }
}