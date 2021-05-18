var backgroundI;
var background1;
var tower1;
var tower2;
var card1;
var card2;
var card3;
var card4;
var card5;
var card6;
var card7;
var card8;
var win;
var lose;
var Troop1;
var Troop2;
var Troop3;
var Troop4;
var Troop5;
var Troop6;
var Troop7;
var Troop8;
var tower1Image;
var tower2Image;
var cardImage1;
var cardImage2;
var cardImage3;
var cardImage4;
var nukeImage;
var armyImage1;
var armyImage2;
var ballImage1;
var ballImage2;
var rainImage1;
var rainImage2;
var winImage;
var loseImage;
//var song;
function preload(){
cardImage1=loadImage("images/card1.png");
cardImage2=loadImage("images/card2.png");
cardImage3=loadImage("images/card3.png");
cardImage4=loadImage("images/card4.png");
nukeImage=loadImage("images/nuke.png");
armyImage1=loadImage("images/army1.png");
armyImage2=loadImage("images/army2.png");
ballImage1=loadImage("images/ball1.png");
ballImage2=loadImage("images/ball2.png");
rainImage1=loadImage("images/rain1.png");
rainImage2=loadImage("images/rain2.png");
backgroundI=loadImage("images/background.png");
tower1Image=loadImage("images/tower1.png");
tower2Image=loadImage("images/tower2.png");
winImage=loadImage("images/win.png");
loseImage=loadImage("images/lose.png");
//song=loadSound("images/song.mp3");
}

function setup(){
canvas=createCanvas(1400,1005);
background1=createSprite(700,350);
background1.addImage(backgroundI);
tower1=createSprite(135,280,200,200);
tower1.addImage(tower1Image);
tower2=createSprite(1245,280,200,200);
tower2.addImage(tower2Image);
card1=createSprite(120,540,200,200);
card1.addImage(cardImage1);
card2=createSprite(40,650,200,200);
card2.addImage(cardImage2);
card3=createSprite(120,650,200,200);
card3.addImage(cardImage3);
card4=createSprite(200,650,200,200);
card4.addImage(cardImage4);
card5=createSprite(1250,540,200,200);
card5.addImage(cardImage1);
card6=createSprite(1350,650,200,200);
card6.addImage(cardImage2);
card7=createSprite(1250,650,200,200);
card7.addImage(cardImage3);
card8=createSprite(1150,650,200,200);
card8.addImage(cardImage4);
Troop1=createSprite(card1.x,card1.y,20,20);
Troop1.addImage(armyImage1);
Troop1.visible=false;
Troop2=createSprite(card2.x,card2.y,20,20);
Troop2.addImage(ballImage1);
Troop2.visible=false;
Troop3=createSprite(card3.x,card3.y,20,20);
Troop3.addImage(rainImage1);
Troop3.visible=false;
Troop4=createSprite(card4.x,card4.y,20,20);
Troop4.addImage(nukeImage);
Troop4.visible=false;
Troop5=createSprite(card5.x,card5.y,20,20);
Troop5.addImage(armyImage2);
Troop5.visible=false;
Troop6=createSprite(card6.x,card6.y,20,20);
Troop6.addImage(ballImage2);
Troop6.visible=false;
Troop7=createSprite(card7.x,card7.y,20,20);
Troop7.addImage(rainImage2);
Troop7.visible=false;
Troop8=createSprite(card8.x,card8.y,20,20);
Troop8.addImage(nukeImage);
Troop8.visible=false;
win=createSprite(335,350,20,20);
win.addImage(winImage);
win.visible=false;
lose=createSprite(1000,350,20,20);
lose.addImage(loseImage);
lose.visible=false;
}
function draw(){
  background("red");
//song.loop();
correctCardPosition();
createTroops();
action();
reachEnd();
selectCard();
drawSprites();
fill("black");
textSize(25);
text("Selecting the card     |     Spawning the troops         |     What each troop does                         ",100,750);
fill("black");
textSize(25);
text("For player1: | For player2:    |",20,775);
fill("black");
textSize(25);
text("1 for army | m for army       |",41,800);
fill("black");
textSize(25);
text("2 for fireball | k for fireball    |",23,825);
fill("black");
textSize(25);
text("3 for rainfire | l for rainfire    |",20,850);
fill("black");
textSize(25);
text("4 for nuclear | p for nuclear  |",17,875);
fill("black");
textSize(25);
text("After selecting your card,     |",350,775);
fill("black");
textSize(25);
text("use the arrow keys for the    |",350,800);
fill("black");
textSize(25);
text("right deck and a,w,s,d for the|",350,825);
fill("black");
textSize(25);
text("left deck to position the card,|",350,850);
fill("black");
textSize(25);
text("then press q or space to       |",350,875);
fill("black");
textSize(25);
text("| deploy the troops on the left |",335,900);
fill("black");
textSize(25);
text("| and right respectively.          |",335,925);
fill("black");
textSize(25);
text("The army marches foward                       ",680,775);
fill("black");
textSize(25);
text("The fireball destroys anything in its path ",680,800);
fill("black");
textSize(25);
text("The raining fire showers destruction on anythig it comes across ",680,825);
fill("black");
textSize(25);
text("The nuke is an invisible trap that blows up anything comin its way ",680,850);
fill("black");
textSize(25);
text("Important note-1: A player wins if his army reaches the opponent's base  ",20,975);
fill("black");
textSize(25);
text("Important note-2: If any two troops of opposite sides collide, they cancel out each other",20,1000);
}
function selectCard(){
  if(keyDown("1")&&card1.y===540&&card1.x===120&&card1.visible===true){
    card1.y=350;
    card1.x=300;
    if(card2.visible===true){
    card2.y=650;
    card2.x=40;
    }
    if(card3.visible===true){
    card3.y=650;
    card3.x=120;
    }
    if(card4.visible===true){
    card4.y=650;
    card4.x=200;
    }
    }
  if(card1.visible===true&&card1.x>=300){
    if(keyDown("a")){
    card1.x=card1.x-10;
    }
    if(keyDown("d")){
    card1.x=card1.x+10;
    }
    if(keyDown("w")){
      card1.y=card1.y-10;
      }
      if(keyDown("s")){
        card1.y=card1.y+10;
        }
      }
  if(keyDown("2")&&card2.y===650&&card2.visible===true){
    card2.y=350;
    card2.x=300;
    if(card1.visible===true){
card1.y=540;
card1.x=120;
    }
if(card3.visible===true){
  card3.y=650;
  card3.x=120;
  }
  if(card4.visible===true){
    card4.y=650;
    card4.x=200;
    }
  }
  if(card2.visible===true&&card2.x>=300){
    if(keyDown("a")){
    card2.x=card2.x-10;
    }
    if(keyDown("d")){
    card2.x=card2.x+10;
    }
    if(keyDown("w")){
      card2.y=card2.y-10;
      }
      if(keyDown("s")){
        card2.y=card2.y+10;
        }
      }
  if(keyDown("3")&&card3.y===650&&card3.visible===true){
    card3.y=350;
    card3.x=300;
    if(card1.visible===true){
      card1.y=540;
      card1.x=120;
          }
if(card2.visible===true){
  card2.y=650;
  card2.x=40;
  }
  if(card4.visible===true){
    card4.y=650;
    card4.x=200;
    }
  }
  if(card3.visible===true&&card3.x>=300){
    if(keyDown("a")){
    card3.x=card3.x-10;
    }
    if(keyDown("d")){
    card3.x=card3.x+10;
    }
    if(keyDown("w")){
      card3.y=card3.y-10;
      }
      if(keyDown("s")){
        card3.y=card3.y+10;
        }
      }

  if(keyDown("4")&&card4.y===650&&card4.visible===true){
    card4.y=350;
    card4.x=300;
    if(card1.visible===true){
card1.y=540;
card1.x=120;
    }
    if(card2.visible===true){
      card2.y=650;
      card2.x=40;
      }
      if(card3.visible===true){
        card3.y=650;
        card3.x=120;
        }
  }
  if(card4.visible===true&&card4.x>=300){
    if(keyDown("a")){
    card4.x=card4.x-10;
    }
    if(keyDown("d")){
    card4.x=card4.x+10;
    }
    if(keyDown("w")){
      card4.y=card4.y-10;
      }
      if(keyDown("s")){
        card4.y=card4.y+10;
        }
      }
  if(keyDown("m")&&card5.y===540&&card5.visible===true){
    card5.y=350;
    card5.x=1050;
if(card6.visible===true){
card6.y=650;
card6.x=1350;
}
if(card7.visible===true){
card7.y=650;
card7.x=1250;
}
if(card8.visible===true){
card8.y=650;
card8.x=1150;
}
}
if(card5.visible===true&&card5.x<=1050){
  if(keyDown("LEFT_ARROW")){
  card5.x=card5.x-10;
  }
  if(keyDown("RIGHT_ARROW")){
  card5.x=card5.x+10;
  }
  if(keyDown("UP_ARROW")){
    card5.y=card5.y-10;
    }
    if(keyDown("DOWN_ARROW")){
      card5.y=card5.y+10;
      }
    }
if(keyDown("k")&&card6.y===650&&card6.visible===true){
card6.y=350;
card6.x=1050;
if(card5.visible===true){
card5.y=540;
card5.x=1250;
}
if(card7.visible===true){
card7.y=650;
card7.x=1250;
}
if(card8.visible===true){
card8.y=650;
card8.x=1150;
}
}
if(card6.visible===true&&card6.x<=1050){
  if(keyDown("LEFT_ARROW")){
  card6.x=card6.x-10;
  }
  if(keyDown("RIGHT_ARROW")){
  card6.x=card6.x+10;
  }
  if(keyDown("UP_ARROW")){
    card6.y=card6.y-10;
    }
    if(keyDown("DOWN_ARROW")){
      card6.y=card6.y+10;
      }
    }
  if(keyDown("l")&&card7.y===650&&card7.visible===true){
    card7.y=350;
    card7.x=1050;
    if(card5.visible===true){
      card5.y=540;
      card5.x=1250;
      }
    if(card6.visible===true){
      card6.y=650;
      card6.x=1350;
      }
      if(card8.visible===true){
        card8.y=650;
        card8.x=1150;
        }
  }
  if(card7.visible===true&&card7.x<=1050){
    if(keyDown("LEFT_ARROW")){
    card7.x=card7.x-10;
    }
    if(keyDown("RIGHT_ARROW")){
    card7.x=card7.x+10;
    }
    if(keyDown("UP_ARROW")){
      card7.y=card7.y-10;
      }
      if(keyDown("DOWN_ARROW")){
        card7.y=card7.y+10;
        }
      }
  if(keyDown("p")&&card8.y===650&&card8.visible===true){
    card8.y=350;
    card8.x=1050;
    if(card5.visible===true){
      card5.y=540;
      card5.x=1250;
      }
    if(card6.visible===true){
      card6.y=650;
      card6.x=1350;
      }
      if(card7.visible===true){
        card7.y=650;
        card7.x=1250;
        }
  }
  if(card8.visible===true&&card8.x<=1050){
    if(keyDown("LEFT_ARROW")){
    card8.x=card8.x-10;
    }
    if(keyDown("RIGHT_ARROW")){
    card8.x=card8.x+10;
    }
    if(keyDown("UP_ARROW")){
      card8.y=card8.y-10;
      }
      if(keyDown("DOWN_ARROW")){
        card8.y=card8.y+10;
        }
      }
}
//function mouseDragged(){
//if(card1.y===530){
//card1.x=mouseX;
//card1.y=mouseY;  
//}         
//if(card2.y===640){
//  card2.x=mouseX;
//  card2.y=mouseY; 
//  }   
//  if(card3.y===640){
//    card3.x=mouseX;
//    card3.y=mouseY; 
//    }   
//    if(card4.y===640){
//      card4.x=mouseX;
//      card4.y=mouseY; 
//      }  
//}
////function mouseDragged(){
////  if(card5.y===530){
////  card5.x=mouseX;
////  card5.y=mouseY;  
////  }         
////  if(card6.y===640){
////    card6.x=mouseX;
////    card6.y=mouseY; 
////    }   
////    if(card7.y===640){
////      card7.x=mouseX;
////      card7.y=mouseY; 
////      }   
////      if(card8.y===640){
////        card8.x=mouseX;
////        card8.y=mouseY; 
////        }  
////  }
function correctCardPosition(){
  if(card1.x>670&&card1.visible===true||card1.y>700||card1.x<300&&card1.x!==120||card1.y<0){
card1.x=120;
card1.y=540;
}
if(card2.x>670&&card2.visible===true||card2.y>700||card2.x<300&&card2.x!==40||card2.y<0){
  card2.x=40;
  card2.y=650;
  }
  if(card3.x>670&&card3.visible===true||card3.y>700||card3.x<300&&card3.x!==120||card3.y<0){
card3.x=120;
card3.y=650;
}
if(card4.x>670&&card4.visible===true||card4.y>700||card4.x<300&&card4.x!==200||card4.y<0){
  card4.x=200;
  card4.y=650;
  }
  if(card5.x<670&&card5.visible===true||card5.y>700||card5.x>1050&&card5.x!==1250||card5.y<0){
    card5.x=1250;
    card5.y=540;
    }
    if(card6.x<670&&card6.visible===true||card6.y>700||card6.x>1050&&card6.x!==1350||card6.y<0){
      card6.x=1350;
      card6.y=650;
      }
      if(card7.x<670&&card7.visible===true||card7.y>700||card7.x>1050&&card7.x!==1250||card7.y<0){
        card7.x=1250;
        card7.y=650;
        }
        if(card8.x<670&&card8.visible===true||card8.y>700||card8.x>1050&&card8.x!==1150||card8.y<0){
          card8.x=1150;
          card8.y=650;
          }
}
function createTroops(){
if(card1.x!==120&&keyDown("q")){
card1.visible=false;
Troop1.visible=true;
}
if(card1.visible===false&&Troop1.visible===true){
  Troop1.x=card1.x;
  Troop1.y=card1.y;
  card1.velocityX=2.5;  
}
if(card2.x!==40&&keyDown("q")){
card2.visible=false;
Troop2.visible=true;
} 
if(card2.visible===false&&Troop2.visible===true){
  Troop2.x=card2.x;
  Troop2.y=card2.y;
  card2.velocityX=2.5;  
}
if(card3.x!==120&&keyDown("q")){
  card3.visible=false;
  Troop3.visible=true;
  }
  if(card3.visible===false&&Troop3.visible===true){
    Troop3.x=card3.x;
    Troop3.y=card3.y;
    card3.velocityX=2.5;  
  }
  if(card4.x!==200&&keyDown("q")){
    card4.visible=false;
    }
    if(card4.visible===false){
      Troop4.x=card1.x;
      Troop4.y=card1.y;
    }
    if(card5.x!==1250&&keyDown("space")){ 
      card5.visible=false;
      Troop5.visible=true;
      }
      if(card5.visible===false&&Troop5.visible===true){
        Troop5.x=card5.x;
        Troop5.y=card5.y;
        card5.velocityX=-2.5;  
      }
      if(card6.x!==1350&&keyDown("space")){
        card6.visible=false;
        Troop6.visible=true;
        }
        if(card6.visible===false&&Troop6.visible===true){
          Troop6.x=card6.x;
          Troop6.y=card6.y;
          card6.velocityX=-2.5;  
        }
        if(card7.x!==1250&&keyDown("space")){
          card7.visible=false;
          Troop7.visible=true;
          }
          if(card7.visible===false&&Troop7.visible===true){
            Troop7.x=card7.x;
            Troop7.y=card7.y;
            card7.velocityX=-2.5;  
          }
          if(card8.x!==1150&&keyDown("space")){
            card8.visible=false;
            }
            if(card8.visible===false){
              Troop8.x=card8.x;
              Troop8.y=card8.y;  
          }
          }
function reachEnd(){
if(card1.x>1110){
card1.velocityX=0;
card1.x=120;
card1.y=550;
Troop1.visible=false;
card1.visible=true;
card2.velocityX=0;
card2.x=40;
card2.y=660;
Troop2.visible=false;
card2.visible=true;
card3.velocityX=0;
card3.x=120;
card3.y=660;
Troop3.visible=false;
card3.visible=true;
Troop4.visible=true;
card4.x=200;
card4.y=660;
card4.visible=true;
Troop4.visible=false;
card5.velocityX=0;
card5.x=1250;
card5.y=550;
Troop5.visible=false;
card5.visible=true;
card6.velocityX=0;
card6.x=1350;
card6.y=660;
Troop6.visible=false;
card6.visible=true;
card7.velocityX=0;
card7.x=1250;
card7.y=660;
Troop7.visible=false;
card7.visible=true;
Troop8.visible=true;
card8.x=1150;
card8.y=660;
card8.visible=true;
Troop8.visible=false;
win.visible=true;
lose.visible=true;
}
if(card2.x>1110){
  card2.velocityX=0;
  card2.x=40;
  card2.y=650;
  Troop2.visible=false;
  card2.visible=true;
}
if(card3.x>1110){
card3.velocityX=0;
card3.x=120;
card3.y=650;
Troop3.visible=false;
card3.visible=true;
}
if(card4.x>1110){
  Troop4.visible=true;
  card4.x=200;
  card4.y=650;
  card4.visible=true;
  Troop4.visible=false;
}
if(card5.x<240){
  card1.velocityX=0;
  card1.x=120;
  card1.y=550;
  Troop1.visible=false;
  card1.visible=true;
  card2.velocityX=0;
  card2.x=40;
  card2.y=660;
  Troop2.visible=false;
  card2.visible=true;
  card3.velocityX=0;
  card3.x=120;
  card3.y=660;
  Troop3.visible=false;
  card3.visible=true;
  Troop4.visible=true;
  card4.x=200;
  card4.y=660;
  card4.visible=true;
  Troop4.visible=false;
  card5.velocityX=0;
  card5.x=1250;
  card5.y=550;
  Troop5.visible=false;
  card5.visible=true;
  card6.velocityX=0;
  card6.x=1350;
  card6.y=660;
  Troop6.visible=false;
  card6.visible=true;
  card7.velocityX=0;
  card7.x=1250;
  card7.y=660;
  Troop7.visible=false;
  card7.visible=true;
  Troop8.visible=true;
  card8.x=1150;
  card8.y=660;
  card8.visible=true;
  Troop8.visible=false;
  win.visible=true;
  win.x=1000;
  lose.visible=true;
  lose.x=335;
}
if(card6.x<240){
card6.velocityX=0;
card6.x=1350;
card6.y=650;
Troop6.visible=false;
card6.visible=true;
}
if(card7.x<240){
card7.velocityX=0;
card7.x=1250;
card7.y=650;
Troop7.visible=false;
card7.visible=true;
}
if(card8.x<240){
  Troop8.visible=true;
  card8.x=1150;
  card8.y=650;
  card8.visible=true;
  Troop8.visible=false;
}
}
function action(){
if(card1.isTouching(card5)&&card1.visible===false&&card5.visible===false){
  card1.velocityX=0;
  card1.x=120;
 card1.y=540;
  Troop1.visible=false;
 card1.visible=true;
 card5.velocityX=0;
 card5.x=1250;
   card5.y=540;
   Troop5.visible=false;
card5.visible=true;
}
if(card1.isTouching(card6)&&card1.visible===false&&card6.visible===false){
  card1.velocityX=0;
  card1.x=120;
 card1.y=540;
  Troop1.visible=false;
 card1.visible=true;
 card6.velocityX=0;
 card6.x=1350;
 card6.y=650;
 Troop6.visible=false;
card6.visible=true;
}
if(card1.isTouching(card7)&&card1.visible===false&&card7.visible===false){
  card1.velocityX=0;
  card1.x=120;
 card1.y=540;
  Troop1.visible=false;
 card1.visible=true;
 card7.velocityX=0;
 card7.x=1250;
 card7.y=650;
 Troop7.visible=false;
card7.visible=true;
}
if(card1.isTouching(card8)&&card1.visible===false&&card8.visible===false){
  card1.velocityX=0;
  card1.x=120;
 card1.y=540;
  Troop1.visible=false;
 card1.visible=true;
 Troop8.visible=true;
card8.x=1150;
card8.y=650;
card8.visible=true;
Troop8.visible=false;
}
if(card2.isTouching(card5)&&card2.visible===false&&card5.visible===false){
  card2.velocityX=0;
  card2.x=40;
  card2.y=650;
  Troop2.visible=false;
  card2.visible=true;
  card5.velocityX=0;
  card5.x=1250;
    card5.y=540;
    Troop5.visible=false;
 card5.visible=true;
}
if(card2.isTouching(card6)&&card2.visible===false&&card6.visible===false){
  card2.velocityX=0;
  card2.x=40;
  card2.y=650;
  Troop2.visible=false;
  card2.visible=true;
  card6.velocityX=0;
  card6.x=1350;
  card6.y=650;
  Troop6.visible=false;
 card6.visible=true;
}
if(card2.isTouching(card7)&&card2.visible===false&&card7.visible===false){
  card2.velocityX=0;
  card2.x=40;
  card2.y=650;
  Troop2.visible=false;
  card2.visible=true;
  card7.velocityX=0;
  card7.x=1250;
  card7.y=650;
  Troop7.visible=false;
 card7.visible=true;
}
if(card2.isTouching(card8)&&card2.visible===false&&card8.visible===false){
  card2.velocityX=0;
  card2.x=40;
  card2.y=650;
  Troop2.visible=false;
  card2.visible=true;
  Troop8.visible=true;
  card8.x=1150;
  card8.y=650;
  card8.visible=true;
  Troop8.visible=false;
}
if(card3.isTouching(card5)&&card3.visible===false&&card5.visible===false){
  card3.velocityX=0;
  card3.x=120;
  card3.y=650;
  Troop3.visible=false;
  card3.visible=true;
  card5.velocityX=0;
  card5.x=1250;
    card5.y=540;
    Troop5.visible=false;
 card5.visible=true;
}
if(card3.isTouching(card6)&&card3.visible===false&&card6.visible===false){
  card3.velocityX=0;
  card3.x=120;
  card3.y=650;
  Troop3.visible=false;
  card3.visible=true;
  card6.velocityX=0;
  card6.x=1350;
  card6.y=650;
  Troop6.visible=false;
 card6.visible=true;
}
if(card3.isTouching(card7)&&card3.visible===false&&card7.visible===false){
  card3.velocityX=0;
  card3.x=120;
  card3.y=650;
  Troop3.visible=false;
  card3.visible=true;
  card7.velocityX=0;
  card7.x=1250;
  card7.y=650;
  Troop7.visible=false;
 card7.visible=true;
}
if(card3.isTouching(card8)&&card3.visible===false&&card8.visible===false){
  card3.velocityX=0;
  card3.x=120;
  card3.y=650;
  Troop3.visible=false;
  card3.visible=true;
  Troop8.visible=true;
card8.x=1150;
card8.y=650;
card8.visible=true;
Troop8.visible=false;
}
if(card4.isTouching(card5)&&card4.visible===false&&card5.visible===false){
  Troop4.visible=true;
  card4.x=200;
  card4.y=650;
  card4.visible=true;
  Troop4.visible=false;
  card5.velocityX=0;
  card5.x=1250;
    card5.y=540;
    Troop5.visible=false;
 card5.visible=true;
}
if(card4.isTouching(card6)&&card4.visible===false&&card6.visible===false){
  Troop4.visible=true;
  card4.x=200;
  card4.y=650;
  card4.visible=true;
  Troop4.visible=false;
  card6.velocityX=0;
  card6.x=1350;
  card6.y=650;
  Troop6.visible=false;
 card6.visible=true;
}
if(card4.isTouching(card7)&&card4.visible===false&&card7.visible===false){
  Troop4.visible=true;
  card4.x=200;
  card4.y=650;
  card4.visible=true;
  Troop4.visible=false;
  card7.velocityX=0;
  card7.x=1250;
  card7.y=650;
  Troop7.visible=false;
 card7.visible=true;
}
if(card4.isTouching(card8)&&card4.visible===false&&card8.visible===false){
  Troop4.visible=true;
  card4.x=200;
  card4.y=650;
  card4.visible=true;
  Troop4.visible=false;
  Troop8.visible=true;
  card8.x=1150;
  card8.y=650;
  card8.visible=true;
  Troop8.visible=false;
}
}
