class Dustbin {
    constructor(x,y,width,height){
        var options={
    isStatic:true
    
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
      
       

    
     World.add(world,this.body);
    
   
    };
    display()
    {
    var dustbinpos=this.body.position;
    var angle=this.body.angle;
    push()
    translate(dustbinpos.x,dustbinpos.y);
    rotate(angle);
    rectMode(CENTER);
    
    fill(255,0,0);
    rect(0,0,this.width,this.height);
    pop()
    }
    }
    