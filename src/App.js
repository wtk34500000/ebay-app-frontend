import React, { Component } from 'react';
import Login from './components/LoginForm';
import Signup from './components/SignupForm';
import HomeContainer from './containers/HomeContainer';
import ProductItem from './components/ProductDetail'
import HeadContainer from './containers/HeadContainer';
import { Route, Switch, withRouter } from 'react-router-dom';
import Cart from './components/Cart'
import {connect} from 'react-redux'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
             <HeadContainer />
        <Switch>
              <Route path ='/products/:name' render={()=><ProductItem productObj={this.props.currentProduct}/>} />
              <Route path ='/cart' component={Cart} />
              <Route path ='/login' component={Login} />
              <Route path ='/signup' component={Signup} />
              <Route path ='/' component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {currentProduct: state.productInfo.currentProduct}
}

export default withRouter(connect(mapStateToProps)(App));
