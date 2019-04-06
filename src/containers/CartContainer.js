import React from 'react'
import CartList from '../components/CartList'
import CheckoutMenu from '../components/CheckoutMenu'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';

const CartContainer = (props) => {
    return (
        <div className="cart-container">
            <CartList />
            {props.cart.length > 0? <CheckoutMenu />: ''}
        </div>

    )
}

const mapStateToProps = (state) => {
    return {cart: state.cartInfo.cart}
}


export default withRouter(connect(mapStateToProps)(CartContainer));