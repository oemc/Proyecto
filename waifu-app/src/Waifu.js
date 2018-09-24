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
                    <div>Name: {this.state.name}</div>
                    <div>Origin: {this.state.origin}</div>
                    <div>Occupation: {this.state.ocupation}</div>
                    <div>Hair Color: {this.state.hairColor}</div>
                    <div>Alias: {this.state.alias}</div>
                </div>
            </div>
        );
    }
}

export default Waifu;