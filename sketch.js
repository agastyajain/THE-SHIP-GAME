var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var ships, ship1, ship2;
var sea, ship1_img, ship2_img;
var bg;
var ShipsAtEnd;
var end_img;
var end1;

function preload() {
  sea = loadImage("images/sea1.jpg");
  ship1_img = loadImage("images/ship1.png");
  ship2_img = loadImage("images/ship2.png");
  ground = loadImage("images/ground.jpg");
  bg = loadImage("images/bg.jpg");
  end1=loadImage("images/end.png");
}

function setup() {
  canvas = createCanvas(windowWidth-10,windowHeight-22);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
  if (gameState === 0) {
    background(bg);
  }

  if (playerCount === 2) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }

}
