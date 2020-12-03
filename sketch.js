var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var ranks

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("car-racing-game/images/track.jpg");
  car1_img = loadImage("car-racing-game/images/car1.png");
  car2_img = loadImage("car-racing-game/images/car2.png");
  car3_img = loadImage("car-racing-game/images/car3.png");
  car4_img = loadImage("car-racing-game/images/car4.png");
  ground = loadImage("car-racing-game/images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(gameState===0)
  {
    background("red");
  }
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    clear();
    game.end();
    background("green")
    
  }
}
