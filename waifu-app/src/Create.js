import React, {Component} from 'react';
import './Create.css'
import FileBase64 from 'react-file-base64';
import {Redirect} from 'react-router-dom';

class Create extends Component{
    constructor(props){
        super(props);
        let preState = props.character != null ? props.character : {
            pic: "",
            name: "",
            origin: "",
            occupation: "",
            hairColor: "",
            alias: ""
        };
        console.log(props.character);
        this.state = {
            "done": false,
            "character": preState
        };
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

    submit(){
        let updated = Object.assign({}, this.state.character);
        if(updated._id == null){
            fetch(`http://localhost:3001/api/v1/waifu/`, {
                method: 'POST',
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json' }, 
                mode: 'cors',
                body: JSON.stringify(updated)})
              .then((response) => { 
                if(response.status === 201){ this.setState({"done": true}); }
                else{ window.alert('An error has ocurrred');} 
              });
        }
        else{
            fetch(`http://localhost:3001/api/v1/waifu/${updated._id}`, {
                method: 'PUT',
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json' }, 
                mode: 'cors',
                body: JSON.stringify(updated)})
              .then((response) => { 
                if(response.status === 204){ this.setState({"done": true}); }
                else{ window.alert('An error has ocurrred');} 
              });
        }
    }

    render(){
        if(this.state.done){
            return(<Redirect to="/"/>);
        }
        return(
            <div className="CharacterContainer">
                <div className="ParamContainer">
                    <div className="Parameter"><label>Picture:</label><FileBase64 multiple={false} onDone={this.getPic.bind(this)}/></div>
                    <div className="Parameter"><label>Name:</label><input name="name" value={this.state.character.name} onChange={this.handleChange}/></div>
                    <div className="Parameter"><label>Origin:</label><input name="origin" value={this.state.character.origin} onChange={this.handleChange}/></div>
                    <div className="Parameter"><label>Occupation:</label><input name="occupation" value={this.state.character.occupation} onChange={this.handleChange}/></div>
                    <div className="Parameter"><label>Hair Color:</label><input name="hairColor" value={this.state.character.hairColor} onChange={this.handleChange}/></div>
                    <div className="Parameter"><label>Alias:</label><input name="alias" value={this.state.character.alias} onChange={this.handleChange}/></div>
                    <a href="#"><div className="SubmitButton" onClick={this.submit.bind(this)}>Submit</div></a>
                </div>
                <div>
                    <img className="Pic" src={this.state.character.pic} alt="character"/>
                </div>
                
            </div>
        );
    }
}

export default Create;