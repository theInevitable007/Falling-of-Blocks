class Ground {

   constructor(x,y,w,h){

    var GndOptions = {
     isStatic: true
    }
    this.body = Bodies.rectangle(x,y,w,h,GndOptions);
    
    this.width = w;
    this.height = h;

    World.add(world,this.body);
  }

   display(){
       var pos = this.body.position;

       strokeWeight(3);
       fill("brown");
       stroke("blue");

       rectMode(CENTER);
       rect(pos.x,pos.y,this.width,this.height);



   }



   }

