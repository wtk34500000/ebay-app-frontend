import React, { Component } from 'react';
import Login from './components/LoginForm';
import Signup from './components/SignupForm';
import HomeContainer from './containers/HomeContainer';
import ProductItem from './components/ProductDetail'
import ComfirmationPage from './components/ComfirmationPage';
// import Payment from './components/Payment'
import OrderHistory from './components/OrderHistoryList'
import { Route, Switch, withRouter } from 'react-router-dom';
import Cart from './containers/CartContainer'
import {currentUser} from './actions/userAction'
import {loadCart} from './actions/cartAction'
import {connect} from 'react-redux'
import PaymentForm from "./components/PaymentForm"


import './App.css';


class App extends Component {

  componentDidMount = () => {
    const token = localStorage.token;
    const cart = JSON.parse(localStorage.getItem("cart"))

    if(token){
      if(cart){
        this.props.loadCart(cart)
      }
        this.props.currentUser(token)
        console.log(" token is true")
        this.props.history.push("/ecom")
    }else{
      console.log(" token is false")
        this.props.history.push("/signup");
    }
  };

  render() {
    return (
      <div className="App">
        <Switch>
              <Route  path ='/ecom/cart/checkout/comfirmation' component={ComfirmationPage } />
              <Route  path ='/ecom/products/:name' component={ProductItem} />
              <Route  path ='/ecom/:name/history' component={OrderHistory} />
              <Route  path ='/ecom/cart/checkout' component={PaymentForm} />
              <Route  path ='/ecom/cart' component={Cart} />
              <Route  path ='/ecom/profile' component={""} />
              <Route  path ='/ecom' component={HomeContainer} />
              <Route  path ='/login' component={Login} />
              <Route  path ='/signup' component={Signup} />
        </Switch>
      </div>
    );
  }
}


export default withRouter(connect(null, {currentUser, loadCart} )(App));
