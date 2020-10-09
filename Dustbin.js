class Dustbin {
    constructor(x,y,width,height){
 
      var options ={
      isStatic:true

      }
    
    this.width = width;
    this.height = height;
    this.x = x;
    this.y =y;

    this.bottomBody = Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.bottomBody)
    this.leftBody = Bodies.rectangle(x-width/2,y-height/2,height,width-100,options)
    World.add(world,this.leftBody)
    this.rightBody = Bodies.rectangle(x+width/2,y+height/2,height,width-100,options)
    World.add(world,this.rightBody)
    }

    display(){

     push();
     translate(this.bottomBody.position.x,this.bottomBody.position.y)
     rectMode(CENTER)
     rect(0,0,this.width,this.height)
     pop();

     push();
     translate(this.leftBody.position.x,this.leftBody.position.y)
     rectMode(CENTER)
     rect(0,0,this.height,this.width)
     pop();
     
     push();
     translate(this.rightBody.position.x,this.rightBody.position.y)
     rectMode(CENTER)
     rect(0,0,this.height,this.width)
     pop();

    }
}