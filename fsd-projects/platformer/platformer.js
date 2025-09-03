$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();
    

    // TODO 2 - Create Platforms
createPlatform(150 , 650 , 200, 10,"blue");
createPlatform(400 , 550 , 170, 15,"blue" );
createPlatform(650 , 450 , 150, 15, "green");
createPlatform(850 , 350 , 125, 15, "green");
createPlatform(1200 , 255, 125, 15, "cyan");
createPlatform( 500, 300, 115, 15, "red");
createPlatform(200 , 255, 200, 20, "cyan");
createPlatform(1075 , 500, 115, 15, "cyan");
createPlatform(50 , 695 , 200, 10,"blue");
// TODO 3 - Create Collectables
  createCollectable("steve", 1100, 450);
createCollectable("diamond", 200, 170, 0, 0.7);
createCollectable("database", 1250, 200, 0, 0.7);
createCollectable("max", 1200, 150, 0, 1, 1000, 1200, 2);

    
  // TODO 4 - Create Cannons

createCannon("top", 300, 1700);
createCannon("right", 495, 2000);
createCannon("bottom", 1050, 3000);
  createCannon("left", 145, 3000);
createCannon("right", 800, 100);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
