import React from 'react';
import ReactDOM from 'react-dom';
import Circle from './../classes/circle';
export default class Canvas3 extends React.Component {
    colors = ["#1976D2","#FF5722","#FFA000","#0A8754","#E040FB"];
    style={
      border:1,
      borderColor:this.colors[Math.floor(Math.random() * this.colors.length)],
      borderStyle:"solid"
    };
    state = {
      width:800,
      height:500,
      balls:500,
      mouse : {
        x:undefined,
        y:undefined
      }
    };

    circle=[];
    handleMouse(e){
      console.log(e);
        //this.setState({mouse:{x:e.x,y:e.y}});
    }

    getMousePos(canvas,evt){
      const rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    }

    componentDidMount() {
        // ReactDOM.findDOMNode(this).addEventListener('mousemove',this.handleMouse.bind(this));
        const canv = this.refs.canvas;
        const c = canv.getContext('2d');
        canv.addEventListener('mousemove',(e)=>{
          const mousePos = this.getMousePos(canv,e);
          this.setState({mouse:mousePos});
        });
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
          if(this.state.mouse.x){
            cir.setMouse(this.state.mouse);
          }
          cir.update();
          return undefined;
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
