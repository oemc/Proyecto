import React, {Component} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import './Navigation.css'
import Home from './Home.js';
import Create from './Create.js';
import NoMatch from './NoMatch.js'

class Navigation extends Component{
    render(){
        return(
            <div>
                <div className="Navigation">
                    <NavLink exact to= "/" className="NavButton">Home</NavLink>
                    <NavLink exact to= "/Create" className="NavButton">Create</NavLink>
                </div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Create" component={Create}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        );
    }
}

export default Navigation;