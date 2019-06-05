import React, {Component} from 'react';
import './NoMatch.css';

class NoMatch extends Component{
    render(){
        return(
            <div className={"NoMatch"}>
                <label>404 - Not found</label>
            </div>
        );
    }
}

export default NoMatch;