const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ghost;
var image1, image2, image3;
var ghost2, ghost3;
var Pac_Man, image4;

function preload() {
  image1 = loadImage("Images/unnamed.png");
  image2 = loadImage("Images/90d2e3ff2856032d36fcc7dc49334191.png");
  image3 = loadImage("Images/71499-blue-games-ghosts-pac-man-ghost-free-download-png-hd.png");
  image4 = loadImage("Images/ballcow.png");
}

function setup() {
  createCanvas(600, 600);

  engine = Engine.create();
  world = engine.world;
  //top to bottom
  maze1 = new Maze(10, 80, 10, 140);
  maze3 = new Maze(63, 15, 100, 10);
  maze6 = new Maze(107, 60, 10, 80);
  maze8 = new Maze(127, 105, 50, 10);
  maze10 = new Maze(152, 86, 10, 50);
  maze13 = new Maze(270, 66, 250, 10);
  maze14 = new Maze(400, 86, 10, 50);
  maze17 = new Maze(430, 105, 50, 10);
  maze18 = new Maze(460, 60, 10, 100);
  maze20 = new Maze(520, 15, 130, 10);
  maze21 = new Maze(588, 80, 10, 140);
  maze23 = new Maze(270, 100, 160, 10);
  maze26 = new Maze(225, 120, 70, 10);
  maze28 = new Maze(195, 110, 10, 10);
  maze32 = new Maze(345, 110, 10, 10);
  maze31 = new Maze(320, 120, 60, 10);
  maze34 = new Maze(260, 145, 10, 60);
  maze35 = new Maze(286, 145, 10, 60);
  maze36 = new Maze(273, 170, 35, 10);
  //bottom to top
  maze2 = new Maze(300, 595, 600, 10);
  maze4 = new Maze(5, 540, 10, 130);
  maze5 = new Maze(5, 362, 10, 80);
  maze7 = new Maze(54, 320, 120, 10);
  maze9 = new Maze(89, 310, 49, 10);
  maze11 = new Maze(69, 280, 10, 50);
  maze12 = new Maze(32, 260, 66, 10);
  maze15 = new Maze(32, 227, 66, 10);
  maze16 = new Maze(32, 187, 66, 10);
  maze19 = new Maze(70, 207, 10, 50);
  maze22 = new Maze(595, 540, 10, 130);
  maze24 = new Maze(595, 362, 10, 80);
  maze25 = new Maze(554, 320, 120, 10);
  maze27 = new Maze(489, 310, 49, 10);
  maze29 = new Maze(469, 280, 10, 50);
  maze30 = new Maze(432, 260, 66, 10);
  maze33 = new Maze(432, 227, 66, 10);
  maze37 = new Maze(308, 425, 200, 10);
  maze38 = new Maze(308, 385, 250, 10);
  maze39 = new Maze(136, 537, 180, 10);
  maze40 = new Maze(160, 480, 10, 60);
  maze41 = new Maze(136, 510, 180, 10);
  maze42 = new Maze(54, 524, 10, 10);
  maze43 = new Maze(219, 524, 10, 10);
  maze44 = new Maze(190, 480, 10, 60);
  maze45 = new Maze(284, 220, 80, 10);
  maze46 = new Maze(284, 260, 80, 10);
  maze47 = new Maze(244, 240, 10, 50);

  Pac_Man = createSprite(309, 408, 10, 10);
  ghost = createSprite(284, 240, 10, 10);
  ghost2 = createSprite(304, 240, 10, 10);
  ghost3 = createSprite(264, 240, 10, 10);

  ghost.addImage(image1);
  ghost.scale = 0.05;

  ghost2.addImage(image2);
  ghost2.scale = 0.025;

  ghost3.addImage(image3);
  ghost3.scale = 0.04;

  Pac_Man.addImage(image4);
  Pac_Man.scale = 0.019;
}
function draw() {
  background(0, 0, 0);
  fill("purple");
  maze1.display();
  maze2.display();
  maze3.display();
  maze4.display();
  maze5.display();
  maze6.display();
  maze7.display();
  maze8.display();
  maze9.display();
  maze10.display();
  maze11.display();
  maze12.display();
  maze13.display();
  maze14.display();
  maze15.display();
  maze16.display();
  maze17.display();
  maze18.display();
  maze19.display();
  maze20.display();
  maze21.display();
  maze22.display();
  maze23.display();
  maze24.display();
  maze25.display();
  maze26.display();
  maze28.display();
  maze27.display();
  maze29.display();
  maze32.display();
  maze31.display();
  maze30.display();
  maze33.display();
  maze34.display();
  maze35.display();
  maze36.display();
  maze37.display();
  maze38.display();
  maze39.display();
  maze40.display();
  maze41.display();
  maze42.display();
  maze43.display();
  maze44.display();
  maze45.display();
  maze46.display();
  maze47.display();

  if (keyIsDown(DOWN_ARROW)) {
    Pac_Man.velocityY = 3;
  }
  else if (keyIsDown(UP_ARROW)) {
    Pac_Man.velocityY = -3;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    Pac_Man.velocityX = 3;
  }
  else if(keyIsDown(LEFT_ARROW)){
    Pac_Man.velocityX = -3;
  }

  textSize(15);
  text(mouseX + ":" + mouseY, mouseX, mouseY);
  drawSprites();

}