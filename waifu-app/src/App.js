import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Waifu from './Waifu.js';

let waifuList = [
  {
    "id": 0,
    "pic": "https://i.kym-cdn.com/photos/images/original/001/239/422/4a0.png",
    "name": "Palla",
    "origin": "Fire Emblem Echoes"
  },
  {
    "id": 1,
    "pic": "https://i.kym-cdn.com/photos/images/original/001/239/421/916.png",
    "name": "Catria",
    "origin": "Fire Emblem Echoes"
  },
  {
    "id": 2,
    "pic": "https://i.kym-cdn.com/photos/images/newsfeed/001/239/420/f99.png",
    "name": "Est",
    "origin": "Fire Emblem Echoes"
  },
  {
    "id": 3,
    "pic": "https://i.kym-cdn.com/photos/images/newsfeed/001/239/423/cfa.png",
    "name": "Clair",
    "origin": "Fire Emblem Echoes"
  },
  {
    "id": 4,
    "pic": "https://i.kym-cdn.com/photos/images/original/001/239/427/380.png",
    "name": "Sonia",
    "origin": "Fire Emblem Echoes"
  },
  {
    "id": 5,
    "pic": "https://i.kym-cdn.com/photos/images/original/001/239/428/429.png",
    "name": "Tatiana",
    "origin": "Fire Emblem Echoes"
  },
  {
    "id": 6,
    "pic": "https://i.kym-cdn.com/photos/images/original/001/239/431/2f7.png",
    "name": "Delthea",
    "origin": "Fire Emblem Echoes"
  },
  {
    "id": 7,
    "pic": "https://i.kym-cdn.com/photos/images/original/001/239/437/0d7.png",
    "name": "Mathilda",
    "origin": "Fire Emblem Echoes"
  },
  {
    "id": 8,
    "pic": "https://serenesforest.net/wp-content/gallery/echoes-portraits/Celica.png",
    "name": "Celica",
    "origin": "Fire Emblem Echoes"
  },
  {
    "id": 9,
    "pic": "https://serenesforest.net/wp-content/gallery/echoes-portraits/Faye.png",
    "name": "Faye",
    "origin": "Fire Emblem Echoes"
  },
  {
    "id": 10,
    "pic": "https://serenesforest.net/wp-content/gallery/echoes-portraits/Genny.png",
    "name": "Genny",
    "origin": "Fire Emblem Echoes"
  },
  {
    "id": 11,
    "pic": "https://serenesforest.net/wp-content/gallery/echoes-portraits/Mae.png",
    "name": "Mae",
    "origin": "Fire Emblem Echoes"
  },
  {
    "id": 12,
    "pic": "https://serenesforest.net/wp-content/gallery/echoes-portraits/Silque.png",
    "name": "Silque",
    "origin": "Fire Emblem Echoes"
  }
];

class App extends Component {
  constructor(props){
    super(props);
    let foundList = [];
    let foundTotal = localStorage.getItem("total");
    for(let i = 0; i < foundTotal; i++ ){
      foundList.push(JSON.parse(localStorage.getItem(i)));
    }
    this.state = {
      "localList": foundList 
    }
  }

  updateList = () => {
    localStorage.setItem("total", waifuList.length);
    waifuList.forEach((character) => {
      localStorage.setItem(character.id, JSON.stringify(character));
    });
    this.setState({"localList": waifuList});
  }

  renderWaifulist(){
    if (this.state.localList === null){
      return null;
    } 
    return(
      this.state.localList.map((character) => {
        return(
          <Waifu key={character.id} character={character}/>
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
