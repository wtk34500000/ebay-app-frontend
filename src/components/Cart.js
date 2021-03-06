import React from 'react';
import {connect} from 'react-redux'
import { Nav } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

const Cart = (props) => {

    const onClickCartHandler = () => {
        props.history.push({pathname: '/cart'})
    }

    return (
        <Nav.Link onClick={onClickCartHandler}>CART <i className="fas fa-cart-plus"></i>{`(${props.cart.length})`}</Nav.Link>
    )
}

const mapStateToProps = (state) => {
    return {cart: state.cartInfo.cart}
}

export default withRouter(connect(mapStateToProps)(Cart));