import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Home.css';
import Waifu from './Waifu.js';

class Home extends Component {
  constructor(props){
    super(props);
    let foundList = [];
    let foundId = JSON.parse(localStorage.getItem("allId"));
    if (foundId !== null){
      foundId.forEach((Id) => {
        foundList.push(JSON.parse(localStorage.getItem(Id)));
      });
    }
    this.state = {
      "localList": foundList 
    }
  }

  renderWaifulist(){
    if (this.state.localList === null){
      return null;
    } 
    return(
      this.state.localList.map((character) => {
        return(
          <NavLink to= {"/Update/" + character.id} key={character.id} className="UpdateButton">
            <Waifu character={character}/>
          </NavLink>
        );
      })
    )  
  }

  render() {
    let elements = this.renderWaifulist();
    return (
      <div className="Home">
        {elements}
      </div>
    );
  }
}

export default Home;
