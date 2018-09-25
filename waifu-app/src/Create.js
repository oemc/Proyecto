import React, {Component} from 'react';
import './Create.css'
import FileBase64 from 'react-file-base64';

class Create extends Component{
    constructor(props){
        super(props);
        let preState = {};
        props.character != null ? preState.character = props.character : preState.character = {};
        this.state = preState;
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        let updated = Object.assign({}, this.state.character);
        updated[event.target.name] = event.target.value;
        this.setState({"character": updated});
    }

    getPic(file){
        let updated = Object.assign({}, this.state.character);
        updated.pic = file.base64;
        this.setState({"character": updated});
    }

    render(){
        return(
            <div className="CharacterContainer">
                <div className="ParamContainer">
                    <div className="Parameter"><label>Picture:</label><FileBase64 multiple={false} onDone={this.getPic.bind(this)}/></div>
                    <div className="Parameter"><label>Name:</label><input name="name" value={this.state.character.name} onChange={this.handleChange}/></div>
                    <div className="Parameter"><label>Origin:</label><input name="origin" value={this.state.character.origin} onChange={this.handleChange}/></div>
                    <div className="Parameter"><label>Occupation:</label><input name="occupation" value={this.state.character.occupation} onChange={this.handleChange}/></div>
                    <div className="Parameter"><label>Hair Color:</label><input name="hairColor" value={this.state.character.hairColor} onChange={this.handleChange}/></div>
                    <div className="Parameter"><label>Alias:</label><input name="alias" value={this.state.character.alias} onChange={this.handleChange}/></div>
                    <div className="SubmitButton">Submit</div>
                </div>
                <div>
                    <img className="Pic" src={this.state.character.pic} alt="character"/>
                </div>
            </div>
        );
    }
}

export default Create;