import React, { Component } from 'react';
import logo from './Logo.png';
import './App.css';
import Navigation from './Navigation.js';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="Logo" alt="app-logo"/>
          <div className="Message">
            <h1 className="App-title">Welcome to WaifuApp!!!</h1>
          </div>
        </header>
        <BrowserRouter>
          <Navigation/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;