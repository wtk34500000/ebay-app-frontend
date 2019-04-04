import React, { Component } from 'react';
import Login from './components/LoginForm';
import Signup from './components/SignupForm';
import HomeContainer from './containers/HomeContainer';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
              <Route path ='/login' component={Login} />
              <Route path ='/signup' component={Signup} />
              <Route path ='/' component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
