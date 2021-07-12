var iss,spacecraft,bg;
var issimg,spacecraftimg,bgimg,spacecraftd,spacecraftl,spacecraftr;
var dock=false;

function preload(){
  bgimg=loadImage("spacebg.jpg");
  spacecraftimg=loadImage("spacecraft1.png");
  spacecraftd=loadImage("spacecraft2.png");
  spacecraftr=loadImage("spacecraft4.png");
  spacecraftl=loadImage("spacecraft3.png");
  issimg=loadImage("iss.png");
}

function setup() {
  createCanvas(600,350);
  spacecraft=createSprite(285, 240);
  spacecraft.addImage(spacecraftimg);
  spacecraft.scale=0.2;

  iss=createSprite(330, 130);
  iss.addImage(issimg);
  iss.scale=0.3;
}

function draw() {
  background(bgimg); 

  if(!dock){
spacecraft.x=spacecraft.x + random(-1,1);
  

  if(keyDown(UP_ARROW)){
spacecraft.y=spacecraft.y-2;
  }

  if(keyDown(LEFT_ARROW)){
    spacecraft.x=spacecraft.x-2;
    spacecraft.addImage(spacecraftl);
      }

  if(keyDown(RIGHT_ARROW)){
        spacecraft.x=spacecraft.x+2;
        spacecraft.addImage(spacecraftr);
          }

          if(keyDown(DOWN_ARROW)){
            spacecraft.addImage(spacecraftd);
              }
            }

if(spacecraft.y<=(iss.y + 70) && spacecraft.x<=(iss.x-10)){
dock=true;
fill(255);
textSize(30);
text("DOCKING IS SUCCESSFUL" , 150 , 300 );
}

  drawSprites();
}