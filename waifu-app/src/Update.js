import React, {Component}from 'react';
import {Redirect} from 'react-router-dom';
import Waifu from './Waifu.js';
import Create from './Create';
import './Update.css'
const Update = ({match}) => (<UpdatePage id={match.params.id}/>);

class UpdatePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            "id": this.props.id
        };
    }

    render(){
        let character = JSON.parse(localStorage.getItem(this.state.id));
        if (character === null){
            return(
                <Redirect to="/NoMatch"/>
            );
        }
        return(
            <div className="Update">
                <div className="Column">
                    <h1>Current Data</h1>
                    <Waifu key={character.id} character={character}/>
                </div>
                <div className="Column">
                    <h1>New Data</h1>
                    <Create/>
                </div>
            </div>
        );
    }
}

export default Update;