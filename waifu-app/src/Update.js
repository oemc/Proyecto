import React, {Component}from 'react';
import {Redirect} from 'react-router-dom';
import Waifu from './Waifu.js';
import Create from './Create';
import './Update.css'
const Update = ({match}) => (<UpdatePage _id={match.params._id}/>);

class UpdatePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            character: {},
            ready: false,
            redirect: false
        };
        this.getCharacter(props._id);
    }

    getCharacter(_id){
        fetch(`http://localhost:3001/api/v1/waifu/${_id}`, {
          method: 'GET', 
          headers: {'Accept': 'application/json', 'Content-Type': 'application/json' }, 
          mode: 'cors'})
          .then((response) => { 
            if(response.status === 404){ this.setState({ "redirect": true }); }
            return response.json(); })
          .then((json) => { 
            if(!this.state.redirect){ this.setState({ character: json, ready: true }); } });
    }

    render(){
        if (this.state.redirect === true){
            return(
                <Redirect to="/NoMatch"/>
            );
        }
        else if(!this.state.ready){
            return(<div></div>);
        }
        return(
            <div className="Update">
                <div className="Column">
                    <h1>Current Data</h1>
                    <Waifu key={this.state.character._id} character={this.state.character}/>
                </div>
                <div className="Column">
                    <h1>New Data</h1>
                    <Create character={this.state.character}/>
                </div>
            </div>
        );
    }
}

export default Update;