class hat {
      
     constructor(){
          var options = {
               isStatic:true
               
          };
       
          
        this.image =loadImage("Man.png"); 
       this.body = Matter.Bodies.circle(100,450, 50, options);
       this.radius = 50;
       World.add(world, this.body);
     }
     display(){
          var pos = this.body.position;
           imageMode(CENTER);
          image(this.image, pos.x, pos.y);
     }
 }