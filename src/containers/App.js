import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './../components/Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
          <HashRouter>
            <Navbar>
              <Switch>
                <Route exact path='/' component={Home}/>
              </Switch>
            </Navbar>
          </HashRouter>
      </div>
    );
  }
}