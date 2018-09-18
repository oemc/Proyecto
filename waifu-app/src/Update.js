import React, {Component}from 'react';
import {Redirect} from 'react-router-dom';

const Update = ({match}) => (<UpdatePage id={match.params.id}/>);

class UpdatePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            "id": this.props.id
        };
    }

    render(){
        let character = localStorage.getItem(this.state.id);
        if (character === null){
            return(
                <Redirect to="/NoMatch"/>
            );
        };
        return(
            <div>{"OK, this is " + this.state.id}</div>
        );
    }
}

export default Update;