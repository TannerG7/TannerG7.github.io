var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
function createSawBlade(x, y){
    var hitZoneSize = 25;
var damageFromObstacle = 10;
var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
sawBladeHitZone.x = x;
sawBladeHitZone.y = y;
game.addGameItem(sawBladeHitZone);
var obstacleImage = draw.bitmap("img/sawblade.png");
sawBladeHitZone.addChild(obstacleImage);
obstacleImage.x = -25
obstacleImage.y = -25

}
function createEnemy(x, y) {
var enemy = game.createGameItem(enemy, 25);
var redSquare = draw.rect(50, 50, "red");
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = y;
enemy.velocityX = -1;
enemy.rotationalVelocity = -10;
game.addGameItem(enemy);
enemy.onPlayerCollision = function () {
  game.changeIntegrity(-10)
};
enemy.onProjectileCollision = function(){
  game.increaseScore(100);
  enemy.fadeOut();
}
}
function createReward(x, y){
var reward = game.createGameItem(reward, 25);
var yellowSquare = draw.rect(50, 50, "yellow" );
yellowSquare.x = -25;
yellowSquare.y = -25;
reward.addChild(yellowSquare);
reward.x = x;
reward.y = y;
reward.velocityX = -1;
game.addGameItem(reward);
reward.onPlayerCollision = function() {
  game.changeIntegrity(10)
   game.increaseScore(100);
   reward.shrink();
}
}


createReward(400,170)


createEnemy(600, groundY - 70)

createSawBlade(800, 175);
createSawBlade(1300, 165);
createSawBlade(1000, 265);

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
