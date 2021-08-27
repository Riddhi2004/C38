var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() {
  backgroundImage = loadImage("../C37RV_SpeedRacer_StudentActivity-main/assets/background.png");
  car1_img = loadImage("../C37RV_SpeedRacer_StudentActivity-main/assets/car1.png");
  car2_img = loadImage("../C37RV_SpeedRacer_StudentActivity-main/assets/car2.png");
  track = loadImage("../C37RV_SpeedRacer_StudentActivity-main/assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
