var vidas = 5;
var basketImg;
var volleyImg;
var footballImg;
var bowlingImg;
var victoryImg;
var gameOverImg

function preload(){

  basketImg = loadImage('basketball.png');
  volleyImg = loadImage('volleyball.png');
  footballImg = loadImage('football.png');
  bowlingImg = loadImage('bowling.png');

  victoryImg = loadImage ('victory.png');
  gameOverImg = loadImage('gameOver.png')
}

function setup() {
    createCanvas(windowWidth, windowHeight);


    wall1 = createSprite(windowWidth / 10, windowHeight - 570, windowWidth / 1, 15);
    wall1.shapeColor = "red";

    wall2 = createSprite(windowWidth / 1.3, windowHeight - 380, windowWidth / 1.3, 15);
    wall2.shapeColor = "green";

    wall3 = createSprite(windowWidth / 10, windowHeight - 160, windowWidth / 3, 15);
    wall3.shapeColor = "blue";

    wall4 = createSprite(windowWidth / 10, windowHeight - 75, 10, 150);
    wall4.shapeColor = "purple";

    wall5 = createSprite(windowWidth / 9, windowHeight - 650, 10, 150);
    wall5.shapeColor = "orange";

    wall6 = createSprite(windowWidth / 2, windowHeight - 160, windowWidth / 3, 15);
    wall6.shapeColor = "blue";

    redSquare = createSprite(windowWidth / 6, windowHeight - 650, 20, 20);
    redSquare.shapeColor= 'red';
    redSquare.velocity.y = -10;

    wallR = createSprite(windowWidth / 1, windowHeight - 350, 10, windowHeight);
    wallL = createSprite(windowWidth / 150, windowHeight - 350, 10, windowHeight);
    wallT = createSprite(windowWidth / 2, windowHeight - 710, windowWidth, 10);
    wallB = createSprite(windowWidth / 2, windowHeight - 20, windowWidth, 10);

    wallT.visible = false;
    wallB.visible = false;
    wallL.visible = false;
    wallR.visible = false;

    victory = createSprite(windowWidth / 2, windowHeight - 350);
    victory.scale = 0.7;
    victory.visible = false
    victory.addImage(victoryImg);

    gameOver = createSprite(windowWidth / 2, windowHeight - 350);
    gameOver.scale = 1
    gameOver.visible = false
    gameOver.addImage(gameOverImg);

    basket = createSprite(windowWidth / 20, windowHeight - 450);
    basket.scale = 0.2;
    basket.velocityX = - 10;
    basket.velocityY = 10;
    basket.addImage(basketImg);

    volley = createSprite(windowWidth / 2, windowHeight - 100);
    volley.scale = 0.25;
    volley.velocityX = 12;
    volley.velocityY = - 12;
    volley.addImage(volleyImg);

    football = createSprite(windowWidth / 1, windowHeight - 250);
    football.scale = 0.2;
    football.velocityX = - 12;
    football.velocityY = 12;
    football.addImage(footballImg);

    bowling = createSprite(windowWidth / 1.3, windowHeight - 650);
    bowling.scale = 0.25;
    bowling.velocityX = 12;
    bowling.velocityY = - 12;
    bowling.addImage(bowlingImg);

    player = createSprite(windowWidth / 15, windowHeight - 50);
    player.scale = 0.35;
    player.shapeColor = "lightgreen";

}

createEdgeSprites();

function draw() {
    background("black");

    player.collide(wall1);
    player.collide(wall2);
    player.collide(wall3);
    player.collide(wallT);
    player.collide(wallB);
    player.collide(wallR);
    player.collide(wallL);
    player.collide(wall6);

    redSquare.bounceOff(wall1);
    redSquare.bounceOff(wallT);
    
    basket.bounceOff(wall1);
    basket.bounceOff(wall2);
    basket.bounceOff(wall3);
    basket.bounceOff(wall4);
    basket.bounceOff(wall5);
    basket.bounceOff(wall6);
    basket.bounceOff(wallT);
    basket.bounceOff(wallR);
    basket.bounceOff(wallL);
    basket.bounceOff(wallB);
    basket.rotation
    basket.rotationSpeed = -10
    basket.setCollider('rectangle', 0, 0, 300, 300);
    
    volley.bounceOff(wall1);
    volley.bounceOff(wall2);
    volley.bounceOff(wall3);
    volley.bounceOff(wall4);
    volley.bounceOff(wall5);
    volley.bounceOff(wall6);
    volley.bounceOff(wallT);
    volley.bounceOff(wallR);
    volley.bounceOff(wallL);
    volley.bounceOff(wallB);
    volley.rotation
    volley.rotationSpeed = -10
    volley.setCollider('rectangle', 0, 0, 300, 300);
    //volley.debug = true
    
    football.bounceOff(wall1);
    football.bounceOff(wall2);
    football.bounceOff(wall3);
    football.bounceOff(wall4);
    football.bounceOff(wall5);
    football.bounceOff(wall6);
    football.bounceOff(wallT);
    football.bounceOff(wallR);
    football.bounceOff(wallL);
    football.bounceOff(wallB);
    football.rotation
    football.rotationSpeed = -10
    football.setCollider('rectangle', 0, 0, 300, 300);

    bowling.bounceOff(wall1);
    bowling.bounceOff(wall2);
    bowling.bounceOff(wall3);
    bowling.bounceOff(wall4);
    bowling.bounceOff(wall5);
    bowling.bounceOff(wall6);
    bowling.bounceOff(wallT);
    bowling.bounceOff(wallR);
    bowling.bounceOff(wallL);
    bowling.bounceOff(wallB);
    bowling.setCollider('rectangle', 0, 0, 300, 300);
    bowling.rotation
    bowling.rotationSpeed = -10
        
    if (keyDown("down")){
      player.y += 8;
    }
    if (keyDown("up")){
      player.y += -8;
    }
    if (keyDown("right")){
      player.x += 8;
    }
    if (keyDown("left")){
      player.x += -8;
    }
    if(player.isTouching(basket)||player.isTouching(volley)||player.isTouching(football)||player.isTouching(bowling)||player.isTouching(redSquare)){
      player.x = windowWidth / 15;
      player.y = windowHeight - 50;
      vidas -= 1;
    }
    if (vidas == 0) {
      gameOver.visible = true
      player.shapeColor = "#ff0000"
      basket.velocity = 0;
      volley.velocity = 0;
      football.velocity = 0;
      bowling.velocity = 0;
    }
    if (player.isTouching(wall5)) {
      basket.destroy();
      volley.destroy();
      bowling.destroy();
      football.destroy();
      redSquare.destroy();
    }
    if (player.isTouching(wall5)) {
      victory.visible = true;
    }
        
       
    drawSprites(); 
        
    fill("white");
    textSize(40);
    text("chegada!", windowWidth / 140, windowHeight - 650);

    fill("white");
    textSize(40);
    text("❤️: " + vidas, windowWidth / 1.3, windowHeight - 650);
}