import React, { Component } from 'react';
import './Home.css';
import Waifu from './Waifu.js';
import waifuList from './testList.json';

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

  updateList = () => {
    let allId = []
    waifuList.forEach((character) =>{
      allId.push(character.id);
      localStorage.setItem(character.id, JSON.stringify(character));   
    });
    localStorage.setItem("allId", JSON.stringify(allId));
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
      <div className="Home">
        {elements}
      </div>
    );
  }
}

export default Home;
