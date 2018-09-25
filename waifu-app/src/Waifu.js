import React, {Component} from 'react';
import './Waifu.css';

class Waifu extends Component {
    constructor(props){
        super(props);
        this.state = {
            "id": props.character.id,
            "pic": props.character.pic,
            "name": props.character.name,
            "origin": props.character.origin,
            "ocupation": props.character.occupation,
            "hairColor": props.character.hairColor,
            "alias":props.character.alias
        }
    }

    render(){
        return (
            <div className="Waifu">
                <img className="Pic" src={this.state.pic} alt={this.state.name + " pic"}/>
                <div className="Attributes">
                    <div><label>Name: {this.state.name}</label></div>
                    <div><label>Origin: {this.state.origin}</label></div>
                    <div><label>Occupation: {this.state.ocupation}</label></div>
                    <div><label>Hair Color: {this.state.hairColor}</label></div>
                    <div><label>Alias: {this.state.alias}</label></div>
                </div>
            </div>
        );
    }
}

export default Waifu;