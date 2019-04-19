import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';
import cartReducer from './reducers/cartReducer';
import orderReducer from './reducers/orderReducer';
import thunk from 'redux-thunk'
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import {StripeProvider, Elements} from 'react-stripe-elements';

require('dotenv').config()

const rootReducer =combineReducers({
    productInfo: productReducer,
    userInfo: userReducer,
    cartInfo: cartReducer,
    orderInfo: orderReducer
})

const store=createStore(rootReducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const stripe=window.Stripe(process.env.REACT_APP_API_KEY)

ReactDOM.render(
    <Provider store={store}>
        <StripeProvider stripe={stripe}>
            <Elements>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Elements>
        </StripeProvider>
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
