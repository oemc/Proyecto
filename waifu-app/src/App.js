import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Waifu from './Waifu.js';

let waifuList = [
  {
    "pic": "https://i.kym-cdn.com/photos/images/original/001/239/422/4a0.png",
    "name": "Palla",
    "origin": "Fire Emblem Echoes"
  },
  {
    "pic": "https://i.kym-cdn.com/photos/images/original/001/239/421/916.png",
    "name": "Catria",
    "origin": "Fire Emblem Echoes"
  },
  {
    "pic": "https://i.kym-cdn.com/photos/images/newsfeed/001/239/420/f99.png",
    "name": "Est",
    "origin": "Fire Emblem Echoes"
  }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      "localList": JSON.parse(localStorage.getItem("list")) 
    }
  }

  updateList = () => {
    localStorage.setItem("list", JSON.stringify(waifuList));
    this.setState({"localList": waifuList});
  }

  renderWaifulist(){
    if (this.state.localList === null){
      return null;
    } 
    return(
      this.state.localList.map((character, index) => {
        return(
          <Waifu key={index} character={character}/>
        );
      })
    )  
  }

  render() {
    let elements = this.renderWaifulist();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.updateList}/>
          <h1 className="App-title">Welcome to WaifuApp!!!</h1>
          <h3>To load the characters to LocalStorage click the React logo</h3>
        </header>
        <div className="WaifuContainer">
          {elements}
        </div>
      </div>
    );
  }
}

export default App;
