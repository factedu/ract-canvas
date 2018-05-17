import React from 'react';
export default class Canvas1 extends React.Component {
    style={
      border:1,
      borderColor:"#00B9D7",
      borderStyle:"solid"
    };
    state = {
      width:800,
      height:500,
      x:200,
      y:200,
      dx:1,
      dy:1,
      radius:30
    };
    componentDidMount() {
        this.animate();
    }
    updateCanvas() {
        let x = this.state.x;
        let y = this.state.y;
        let dx = this.state.dx;
        let dy = this.state.dy;
        let innerWidth = this.state.width;
        let innerHeight = this.state.height;
        let radius = this.state.radius;
        const c = this.refs.canvas.getContext('2d');
        c.clearRect(0,0,innerWidth,innerHeight);
        c.beginPath();
        c.arc(x,y,radius,Math.PI*2,false);
        c.strokeStyle='blue';
        c.fillStyle='red';
        c.fill();
        // c.stroke();
        console.log(x,innerWidth);
        if(x+radius>innerWidth || x-radius<0){
          dx=-dx;
          this.setState({dx:dx});
        }
        if(y+radius>innerHeight || y-radius<0){
          dy=-dy;
          this.setState({dy:dy});
        }
        x+=dx;
        y+=dy;
        this.setState({x:x,y:y});
    }
    animate = ()=>{
      requestAnimationFrame(this.animate);
      this.updateCanvas();
    }
    render() {
        return (
            <canvas ref="canvas" style={this.style} width={this.state.width} height={this.state.height}/>
        );
    }
}
