import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"

import './App.css';

import Home from './pages/Home/Home'
class App extends Component {
  render() {
    const { history } = this.props

    return (
        <div className="App">
          <Switch>
            <Route history={history} path='/home' component={Home} />
            <Redirect from='/' to='/home'/>
          </Switch>
        </div>
    );
  }
}

export default withRouter(App)