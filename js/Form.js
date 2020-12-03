class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.replay=createButton('Replay')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-160,20);
    this.replay.position(displayWidth-80,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    
   
  }
  end()
  {
    var greet2=createElement('h2');
    greet2.html("congratulations "+player.name + "your rank is   "+player.rank)
    greet2.position(displayWidth/2 - 70, displayHeight/4)
    
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      player.updateCarsAtEnd(0);
      var playerRef=database.ref('players');
      playerRef.remove();
      
    });
    this.replay.mousePressed(()=>{
      greet2.hide();
      game.start();
    })
    
  }
}
