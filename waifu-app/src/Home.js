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
      "localList": [] 
    }
    this.getList();
  }

  getList(){
    fetch(`http://localhost:3001/api/v1/waifu/`, {
      method: 'GET', 
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json' }, 
      mode: 'cors'})
      .then((response) => { return response.json(); } )
      .then((json) => { this.setState({ "localList": json }) });
  }

  deletePrompt(id, name){
    if (window.confirm('Are you sure you wish to delete ' + name)){
      fetch(`http://localhost:3001/api/v1/waifu/${id}`, {
        method: 'DELETE', 
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json' }, 
        mode: 'cors'})
      .then((response) => { 
        if(response.status === 204){ this.getList(); }
        else{ window.alert('An error has ocurrred');} 
      });
    }
  }

  renderWaifulist(){
    if (this.state.localList === null){
      return null;
    }
    return(
      this.state.localList.map((character) => {
        return(
          <div className="WaifuTile" key={character._id}>
            <div className="Controls">
              <NavLink to= {"/Update/" + character._id}><img className="Icon" src={Edit} alt="edit"/></NavLink>
              <a href="#"><img className="Icon" src={Delete} alt="delete" onClick={() => this.deletePrompt(character._id, character.name)}/></a>
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
