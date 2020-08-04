import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import "./App.css";

import Smurfs from '../components/smurfs/smurfs';
import SmurfForm from '../components/form/smurfform';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Switch>
          <Route path="/form" component={SmurfForm} />
          <Route exact path="/" component={Smurfs} />
        </Switch>
      </div>
    );
  }
}

export default App;
