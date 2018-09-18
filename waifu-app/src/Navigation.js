import React, {Component} from 'react';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import './Navigation.css'
import Home from './Home.js';
import Create from './Create.js';

class Navigation extends Component{
    render(){
        return(
            <div>
                <nav><NavLink to= "/">Home</NavLink></nav>
                <nav><NavLink to= "/Create">Create</NavLink></nav>
                <Route exact path="/" component={Home}></Route>
                <Route path="/Create" component={Create}></Route>
            </div>
        );
    }
}

export default Navigation;