class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.4,
            'friction':0
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x=x
        this.y=y
    this.visiblity=255
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        if(this.body.speed<3){
            rect(this.x,this.y, this.width, this.height);
          }
          else{

          
        push();
        this.visiblity=this.visiblity-5
        tint(255,this.visiblity)
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        rect( 0, 0, this.width, this.height);
        pop();}
      }
      score(){
        if(this.visiblity<0&&this.visiblity>-105){
           score++ 
        }  
      }
}