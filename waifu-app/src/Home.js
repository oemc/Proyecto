import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Delete from './delete.svg';
import Edit from './edit.svg';
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

  deletePrompt(){
    if (window.confirm('Are you sure you wish to delete this item?'));
  }

  renderWaifulist(){
    if (this.state.localList === null){
      return null;
    } 
    return(
      this.state.localList.map((character) => {
        return(
          <div className="WaifuTile">
            <div className="Controls">
              <NavLink to= {"/Update/" + character.id} key={"U"+character.id}><img className="Icon" src={Edit} alt="edit"/></NavLink>
              <img className="Icon" src={Delete} alt="delete" onClick={this.deletePrompt}/>
            </div>
            <Waifu character={character}/>
          </div>
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
