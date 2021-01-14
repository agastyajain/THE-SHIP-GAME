class Game {
    constructor() {
  
    }
  
    getState() {
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", function (data) {
        gameState = data.val();
      })
  
    }
  
    update(state) {
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start() {
      if (gameState === 0) {
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if (playerCountRef.exists()) {
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      ship1 = createSprite(100, 200);
      ship1.addImage("ship1", ship1_img);
      ship2 = createSprite(600, 200);
      ship2.addImage("ship2", ship2_img);
      ships = [ship1, ship2];
    }
  
    play() {
      form.hide();
  
      Player.getPlayerInfo();
      player.getShipsAtEnd();
  
      if (allPlayers !== undefined) {
        background(ground);
        image(sea, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
        var index = 0;
        var x = 175;
        var y;
  
  
        for (var plr in allPlayers) {
          index = index + 1;
          x = x + 400;
          y = displayHeight - allPlayers[plr].distance;
          ships[index - 1].x = x;
          ships[index - 1].y = y;
  
  
  
  
          if (index === player.index) {
            textSize(20);
            fill("yellow");
            stroke("red");
            var number = 1;
            text(number + "- " + allPlayers[plr].name + " :" + allPlayers[plr].distance, width - 250, ships[index - 1].y);
            number = number + 1;
            camera.position.x = displayWidth / 2;
            camera.position.y = ships[index - 1].y;
          }
        }
  
      }
  
  
  
      if (keyIsDown(UP_ARROW) && player.index !== null) {
        player.distance += 10
        player.update();
      }
  
      if (player.distance > 3500) {
        player.rank = player.rank + 1;
        Player.updateShipsAtEnd(player.rank);
        gameState = 2;
      }
  
      drawSprites();
    }
  
    end() {
      console.log("Game Ended"); 
      background(end1);
    }
  
  
    }
  