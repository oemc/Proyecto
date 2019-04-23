import React, {Component}from 'react';
import {Redirect} from 'react-router-dom';
import Waifu from './Waifu.js';
import Create from './Create';
import './Update.css'
const Update = ({match}) => (<UpdatePage _id={match.params._id}/>);

class UpdatePage extends Component{
    constructor(props){
        super(props);
        this.state = this.getCharacter(props._id);
    }

    getCharacter(_id){
        console.log(_id);
        let character = JSON.parse(localStorage.getItem(_id));
        if(character == null){ return({ "redirect": true }); }
        else { return({ character: character, ready: true }); }
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