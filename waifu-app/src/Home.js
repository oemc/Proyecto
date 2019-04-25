import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Delete from './delete.svg';
import Edit from './edit.svg';
import './Home.css';
import Waifu from './Waifu.js';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      "localList": this.getList() 
    };
  }

  getList(){
    let foundList = [];
    let foundId = JSON.parse(localStorage.getItem("allId"));
    if (foundId !== null){
      foundId.forEach((Id) => {
        foundList.push(JSON.parse(localStorage.getItem(Id)));
      });
    }
    else{ localStorage.setItem("allId", "[]") }
    return(foundList);
  }

  deletePrompt(id, name){
    if (window.confirm('Are you sure you wish to delete ' + name)){
      let foundId = JSON.parse(localStorage.getItem("allId"));
      let index = foundId.indexOf(id);
      foundId.splice(index, 1);
      localStorage.setItem("allId", JSON.stringify(foundId));
      localStorage.removeItem(id);
      this.setState({"localList": this.getList()});
    }
  }

  renderWaifulist(){
    if (this.state.localList === null){
      return null;
    }
    return(
      this.state.localList.map((character) => {
        return(
          <div className="WaifuTile" key={character.id}>
            <div className="Controls">
              <NavLink to= {"/Update/" + character.id}><img className="Icon" src={Edit} alt="edit"/></NavLink>
              <a href="#"><img className="Icon" src={Delete} alt="delete" onClick={() => this.deletePrompt(character.id, character.name)}/></a>
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