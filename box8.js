class Box8{
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.3,
        'friction':1.0,
        'density':0.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    World.add(world, this.body);
  }
  
  display(){
    console.log(this.body.speed);
    rectMode(CENTER);
    if(this.body.speed <3){
      strokeWeight(1.5);
      fill("cyan");
      rect(this.body.position.x,this.body.position.y, this.width, this.height);
    }
    else{
      
      push();
      this.Visibility = this.Visibility - 5;
      tint(255, this.Visibility);
      pop();
      World.remove(world, this.body);
    }
  }  
}