class dropOne extends BaseDrop {
    constructor(width,height,radius){
      super(width,height,radius);
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
  
      if(this.body.position.y>400){
        this.y=0
      }
    }
  }
  