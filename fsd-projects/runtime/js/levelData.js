var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY -100 },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY -125 },
          {type: "reward", x: 750, y: groundY -75},
          { type: "marker", x:1650, y: groundY -45},
          { type: "enemy", x: 400, y: groundY-60},
          {type: "sawblade", x: 1100, y: groundY},
          
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY -100 },
          { type: "reward", x: 750, y: groundY -30},
          {type: "enemy", x: 375, y: groundY -50},
          {type: "marker", x:1500, y:groundY -45},
          {type: "sawblade", x:875, y:groundY},
          {type: "enemy", x:1000, y: groundY -60},
          {type: "sawblade", x:1200, y: groundY -40},
        ],
      },
        {
      name: "Robot Romp",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY -100 },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY -125 },
          {type: "reward", x: 750, y: groundY -75},
          { type: "marker", x:1800, y: groundY -45},
          { type: "enemy", x: 400, y: groundY-60},
          {type: "sawblade", x: 1100, y: groundY},
          {type: "enemy", x: 1200, y: groundY -35},
          {type: "sawblade", x: 1600, y: groundY -75},
          {type: "enemy", x:1425, y: groundY -40},
        ],
      }
    ];

    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
