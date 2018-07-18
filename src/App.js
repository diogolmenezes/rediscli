import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import Stage from './components/stage';
import './css/pure-min.css';
import './css/grids-responsive-min.css';
import './css/style.css';


class App extends Component {

  render() {
    return (
      <div id="layout" className="pure-g">
        <Sidebar />
        <Stage />
      </div>
    );
  }
}

export default App;
