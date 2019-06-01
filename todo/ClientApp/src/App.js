import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from './components/layout/Header';
import SignUp from './components/MainPage/SignUp';
import Login from './components/MainPage/Login';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={SignUp} />
                    <Route exact path='/Todos' component={Header} />
                </Switch>
            </Router>
        );
    }
}
