class Form {

    constructor() {
      this.input = createInput("Enter your Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.greet = createElement('h2');
      this.title = createElement('h2');
    }
    hide() {
      this.greeting.hide();
      this.greet.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display() {
      this.button.style("background-color", "lightgreen");
      this.button.style("border", "5px solid green");
      this.button.style("border-radius", "9px");
      this.button.style("width", "150px");
      this.button.style("height", "50px");

      this.input.style("width", "250px");
      this.input.style("height", "50px");
      this.input.style("border", "3px solid black");
      this.input.style("border-radius", "3px solid black");
      this.input.style("border-radius", "12px");
      


      this.input.position(400, 450);
      this.button.position(700, 450);

 
      this.button.mousePressed(() => {
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount += 1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name);
        this.greeting.position(500, 150);
        this.greet.html("Waiting For Other Players To Join... 2 players should join");
        this.greet.position(400, 180);
      });
  
  
  
  
    }
  }
  