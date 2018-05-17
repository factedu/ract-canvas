import React from 'react';
import Circle from './../classes/circle';

export default class Canvas2 extends React.Component {
    style={
      border:1,
      borderColor:"#00B9D7",
      borderStyle:"solid"
    };
    state = {
      width:800,
      height:500,
      balls:100
    };
    circle=[];
    colors = [
      "#1976D2",
      "#FF5722",
      "#FFA000",
      "#0A8754",
      "#E040FB"
    ];
    componentDidMount() {
        const c = this.refs.canvas.getContext('2d');
        this.setState({c:c});
        for(let i=0;i<this.state.balls;i++){
          const col = this.colors[Math.floor(Math.random() * this.colors.length)];
          const cir=new Circle(c,Math.random()*800,Math.random()*500,(Math.random()-0.5)*3,(Math.random()-0.5)*3,this.state.width,this.state.height,col);
          this.circle.push(cir);
        }
        this.animate();
    }

    updateCanvas() {
        const c = this.refs.canvas.getContext('2d');
        c.clearRect(0,0,this.state.width,this.state.height);
        this.circle.map(cir=>{
          cir.update();
        });
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
