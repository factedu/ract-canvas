import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import CanvasToolbar from './components/canvas-toolbar';
// import Canvas1 from './components/canvas-1';
// import Canvas2 from './components/canvas-2';
import Canvas3 from './components/canvas-3';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="App">
          <AppBar
            title="Canvas Test"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <CanvasToolbar/>
          {/* <Canvas1/>
          <Canvas2/> */}
          <Canvas3/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
