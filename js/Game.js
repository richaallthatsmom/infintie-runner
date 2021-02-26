class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    hero1 = createSprite(50,100);
    hero2 = createSprite(50,200);
    hero3 = createSprite(50,300);
   
    
    hero1.addImage("hero1",hero1Img);
    hero2.addImage("hero2",hero2Img);
    hero3.addImage("hero3",hero3Img);
    hero1.scale = 0.2
    hero2.scale = 0.2
    hero3.scale = 0.2
    heros = [hero1, hero2, hero3];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
     
      var index = 0;

      
      var x = 0;
      var y = 20;
     
      for(var plr in allPlayers){
       
        index = index + 1 ;

        
        y = y + 200;
       
        x = displayWidth - allPlayers[plr].distance;
        heros[index-1].x = x;
        heros[index-1].y = y;

        if (index === player.index){
          camera.position.y = displayHeight/2;
          camera.position.x = x
        }
      }

    }

    if(keyIsDown(RIGHT_ARROW) && player.index!==null){
      console.log(1);
      player.distance +=10
      player.update();
    }

    drawSprites();
  }
}
