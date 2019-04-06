import React, { Component } from 'react';
import Login from './components/LoginForm';
import Signup from './components/SignupForm';
import HomeContainer from './containers/HomeContainer';
import ProductItem from './components/ProductDetail'
import { Route, Switch, withRouter } from 'react-router-dom';
import Cart from './containers/CartContainer'
import {currentUser} from './actions/userAction'
import {loadCart} from './actions/cartAction'
import {connect} from 'react-redux'

import './App.css';


class App extends Component {

  // var storedNames = JSON.parse(localStorage.getItem("names"))

  componentDidMount = () => {
    let token = localStorage.token;
    let cart = JSON.parse(localStorage.getItem("cart"))
    if(token){
        this.props.currentUser(token)
        this.props.loadCart(cart)
        this.props.history.push("/econ")
    }else{
        this.props.history.push("/signup");
    }
  };


  render() {
    return (
      <div className="App">
        <Switch>
              <Route path ='/econ/products/:name' render={()=><ProductItem productObj={this.props.currentProduct}/>} />
              <Route path ='/econ/cart' component={Cart} />
              <Route path ='/login' component={Login} />
              <Route path ='/signup' component={Signup} />
              <Route path ='/econ' component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {currentProduct: state.productInfo.currentProduct}
}

export default withRouter(connect(mapStateToProps, {currentUser, loadCart} )(App));
