import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from './components/layout/Header';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Header} />
                </Switch>
            </Router>


        );
    }
}
