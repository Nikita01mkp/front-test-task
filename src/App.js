import React, {Component} from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"

import './App.scss';

import Home from './pages/Home/Home'
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Users from "./pages/Users/Users";
import UserAccount from "./pages/UserAccount/UserAccount";

class App extends Component {
  render() {
    const {history} = this.props

    return (
      <div className="App">
        <Switch>
          <Route history={history} path='/home' component={Home}/>
          <Route history={history} path='/login' component={Login}/>
          <Route history={history} path='/registration' component={Registration}/>
          <Route history={history} path='/users' component={Users}/>
          <Route history={history} path='/account' component={UserAccount}/>
          <Redirect from='/' to='/home'/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)