import React, {Component} from 'react';
import './Create.css'

let RineaPic = "https://vignette.wikia.nocookie.net/fireemblem/images/f/f1/Rinea.png/revision/latest/scale-to-width-down/250?cb=20170405141110";

class Create extends Component{
    constructor(props){
        super(props);
        if(props.character !== null){
            this.state={"character": props.character};
        }
    }
    
    render(){
        let imagepath = (this.state.character === undefined ? RineaPic : this.state.character.pic);
        return(
            <div className="CharacterContainer">
                <div className="ParamContainer">
                    <div className="Parameter"><label>Picture:</label><input type='file'/></div>
                    <div className="Parameter"><label>Name:</label><input/></div>
                    <div className="Parameter"><label>Origin:</label><input/></div>
                    <div className="Parameter"><label>Occupation:</label><input/></div>
                    <div className="Parameter"><label>Hair Color:</label><input/></div>
                    <div className="Parameter"><label>Alias:</label><input/></div>
                    <button>Submit</button>
                </div>
                <div>
                    <img className="Pic" src={imagepath} alt="character"/>
                </div>
            </div>
        );
    }
}

export default Create;