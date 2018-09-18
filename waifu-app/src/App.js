import React, { Component } from 'react';
import logo from './Logo0.png';
import logo1 from './Logo1.png';
import './App.css';
import waifuList from './testList.json';
import Navigation from './Navigation.js';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  updateList = () => {
    let allId = []
    waifuList.forEach((character) =>{
      allId.push(character.id);
      localStorage.setItem(character.id, JSON.stringify(character));   
    });
    localStorage.setItem("allId", JSON.stringify(allId));
    window.location.reload();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Logo" onClick={this.updateList}>
            <img src={logo} className="App-logo" alt="app-logo" />
            <img src={logo1} className="Animation-logo" alt="animation-logo" />
          </div>
          <div className="Message">
            <h1 className="App-title">Welcome to WaifuApp!!!</h1>
            <h3>To load the characters to LocalStorage click the React logo</h3>
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