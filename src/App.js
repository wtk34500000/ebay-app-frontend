import React, { Component } from 'react';
import Login from './components/LoginForm';
import Signup from './components/SignupForm';
import HomeContainer from './containers/HomeContainer';
import ProductItem from './components/ProductDetail'
import ComfirmationPage from './components/ConfirmationPage';
import OrderHistory from './components/OrderHistoryList'
import { Route, Switch, withRouter } from 'react-router-dom';
import Cart from './containers/CartContainer'
import {currentUser, loadWishList} from './actions/userAction'
import {loadCart} from './actions/cartAction'
import {connect} from 'react-redux'
import PaymentForm from './components/PaymentForm'
import WishList from './components/WishList'
import Profile from './components/Profile'
import LandingPage from './components/LandingPage'

import './App.css';

class App extends Component {

  componentDidMount = () => {
    const token = localStorage.token;
    const cart = JSON.parse(localStorage.getItem("cart"))
    const wishList = JSON.parse(localStorage.getItem("wishList"))
    if(token && token !== undefined){
      if(cart){
        this.props.loadCart(cart)
      }
      if(wishList){
        this.props.loadWishList(wishList)
      }
        this.props.currentUser(token).then(()=> this.props.history.push({pathname: '/welcome'}))
        // this.props.history.push({pathname: '/welcome'})
    }else{
        this.props.history.push({
          pathname: '/'
        });
    }
  };

  render() {
    return (
      <div className="App">
        <Switch>
              <Route  path ='/cart/checkout/confirmation' component={ComfirmationPage} />
              <Route  path ='/products/:name' component={ProductItem} />
              <Route  path ='/:id/profile' component={Profile} />
              <Route  path ='/:name/wishlist' component={WishList} />
              <Route  path ='/:name/history' component={OrderHistory} />
              <Route  path ='/cart/checkout' component={PaymentForm} />
              <Route  path ='/cart' component={Cart} />
              <Route  path ='/login' component={Login} />
              <Route  path ='/signup' component={Signup} />
              <Route  path ='/welcome' component={HomeContainer} />
              <Route  path ='/' component={LandingPage} />
        </Switch>
      </div>
    );
  }
}


export default withRouter(connect(null, {currentUser, loadCart, loadWishList} )(App));
