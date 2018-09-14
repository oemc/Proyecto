import React, {Component} from 'react';
import './Waifu.css';

class Waifu extends Component {
    constructor(props){
        super(props);
        this.state = {
            "id": props.id,
            "pic": props.character.pic,
            "name": props.character.name,
            "origin": props.character.origin   
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