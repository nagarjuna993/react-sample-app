import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <ul className="left">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/rest">Rest</Link></li>
          </ul>
          <Routes></Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;