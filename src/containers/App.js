import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './../components/Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home}/>
            </Switch>
          </BrowserRouter>
        </Navbar>
      </div>
    );
  }
}