import React, { Component } from 'react';
import logo from './Logo.png';
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
          <img src={logo} className="Logo" alt="app-logo" onClick={this.updateList}/>
          <div className="Message">
            <h1 className="App-title">Welcome to WaifuApp!!!</h1>
            <h3>To load the characters to LocalStorage click the logo</h3>
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