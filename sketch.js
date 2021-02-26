var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var heros, hero1, hero2, hero3;
function preload(){
  hero1Img = loadImage("images/hero1.jpg");
  hero2Img = loadImage("images/hero2.jpg");
  hero3Img = loadImage("images/hero3.jpg");
 
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
