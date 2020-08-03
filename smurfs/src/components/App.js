import React, { Component } from "react";

import "./App.css";

import Smurfs from '../components/smurfs/smurfs';

class App extends Component {
  constructor(props){
    super(props);
  }

  getSmurfs(e){
    e.preventDefault();

    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurfs />
      </div>
    );
  }
}

export default App;
