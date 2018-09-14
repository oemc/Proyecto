import React, {Component} from 'react';
import './Waifu.css';

class Waifu extends Component {
    constructor(props){
        super(props);
        this.state = {
            "pic": "https://i.kym-cdn.com/photos/images/original/001/239/422/4a0.png",
            "name": "Palla",
            "origin": "Fire Emblem Echoes"
        }
    }

    render(){
        return (
            <div className="Waifu">
                <img className="Pic" src={this.state.pic} alt='waifu pic'/>
                <div className="Attributes">
                    <div>Name: {this.state.name}</div>
                    <div>Origin: {this.state.origin}</div>
                    <div>Atributo1</div>
                    <div>Atributo2</div>
                    <div>Atributo3</div>
                </div>
            </div>
        );
    }
}

export default Waifu;