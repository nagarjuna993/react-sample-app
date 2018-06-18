import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Basic from './containers/Basic';
import Counter from './containers/Counter';
import Rest from './containers/Rest';
import ForLoop from './containers/ForLoop';
import Condition from './containers/Condition';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Basic></Basic>
        {/* <Counter></Counter>
        <Rest></Rest>
        <ForLoop></ForLoop>
        <Condition></Condition> */}
      </div>
    );
  }
}

export default App;
