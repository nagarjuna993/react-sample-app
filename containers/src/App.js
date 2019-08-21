import React from 'react';
import logo from './logo.svg';
import './App.css';

import Basic from './containers/Basic';
import Counter from './containers/Counter';
import Rest from './containers/Rest';
import ForLoop from './containers/ForLoop';
import Condition from './containers/Condition';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Basic></Basic>
        {/* <Counter></Counter>
        <Rest></Rest>
        <ForLoop></ForLoop>
        <Condition></Condition> */}
      </header>
    </div>
  );
}

export default App;
