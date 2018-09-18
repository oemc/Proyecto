import React, {Component} from 'react';
import './Create.css'

class Create extends Component{
    render(){
        return(
            <div className="ParamContainer">
                <div className="Parameter"><label>Picture:</label><input type='file'/></div>
                <div className="Parameter"><label>Name:</label><input/></div>
                <div className="Parameter"><label>Origin:</label><input/></div>
                <div className="Parameter"><label>Occupation:</label><input/></div>
                <div className="Parameter"><label>Hair Color:</label><input/></div>
                <div className="Parameter"><label>Alias:</label><input/></div>
                <button>Submit</button>
            </div>
            
        );
    }
}

export default Create;