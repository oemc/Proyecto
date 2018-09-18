import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation.js';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.updateList}/>
          <h1 className="App-title">Welcome to WaifuApp!!!</h1>
          <h3>To load the characters to LocalStorage click the React logo</h3>
        </header>
        <BrowserRouter>
          <Navigation/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;