import React, {Component} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import './Navigation.css'
import Home from './Home.js';
import Create from './Create.js';
import Update from './Update.js';
import NoMatch from './NoMatch.js';

class Navigation extends Component{
    render(){
        return(
            <div>
                <div className="Navigation">
                    <NavLink exact to= "/" className="NavButton" activeStyle={{background: 'black'}}>Home</NavLink>
                    <NavLink exact to= "/Create" className="NavButton" activeStyle={{background: 'black'}}>Create</NavLink>
                </div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Create" component={Create}/>
                    <Route path="/Update/:id" component={Update}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        );
    }
}

export default Navigation;