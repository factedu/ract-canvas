export default function Circle(c,x,y,dx,dy,innerWidth,innerHeight,col,onMouseMove){
  this.radius= Math.random()*15+2;
  this.x =x;
  this.y =y;
  this.c = c;
  this.dx=dx;
  this.dy=dy;
  this.innerWidth = innerWidth;
  this.innerHeight = innerHeight;
  this.col=col;
  this.mouse = {
    x:undefined,
    y:undefined
  };
  this.intensity = 40;
  this.maxRadius = 30;
  // this.minRadius = this.radius;
  this.minRadius = 2;

  this.onMouseMove = onMouseMove;

  this.setMouse = (mouse)=>{
    this.mouse = mouse;
  };

  // function to draw a circle
  this.draw =()=>{
    this.c.beginPath();
    this.c.arc(this.x,this.y,this.radius,Math.PI*2,false);
    this.c.fillStyle=this.col;
    this.c.fill();
  };
  // function to update a circle
  this.update = () =>{
    // intractavity
    // console.log(this.mouse);
    if(this.mouse.x && (this.mouse.x-this.x < this.intensity) && (this.mouse.x-this.x > -this.intensity)
      && (this.mouse.y-this.y < this.intensity) && (this.mouse.y-this.y > -this.intensity)
    ){
      if(this.radius < this.maxRadius){
          this.radius+=1;
      }
    }else{
      if(this.radius > this.minRadius){
        this.radius-=1;
      }
    }

    if(this.x+this.radius>this.innerWidth || this.x-this.radius<0){
      this.dx=-this.dx;
    }
    if(this.y+this.radius>this.innerHeight || this.y-this.radius<0){
      this.dy=-this.dy;
    }
    this.x+=this.dx;
    this.y+=this.dy;
    this.draw();
  };


}
