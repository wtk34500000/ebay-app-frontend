import React from 'react'
import {connect} from 'react-redux'
import {withRouter } from 'react-router-dom';
import {emptyCart} from '../actions/cartAction'

const UserMenu = (props) => {
    const onClickHandler = () => {
        props.history.push('/econ/cart')
    }

    const logoutHandler = () => {
        localStorage.clear()
        props.emptyCart()
        props.history.push('/signup')
    }

    return (
        <div className="user-menu">
            <text>{props.user? props.user.first_name:""}</text>
            <button className="menu-item"><i className="fas fa-folder"></i></button>
            <button className="menu-item" onClick={onClickHandler}><i className="fas fa-cart-plus"></i>{`(${props.cart.length})`}</button>
            <button onClick={logoutHandler} className="menu-item">Logout</button> 
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return {cart: state.cartInfo.cart, user: state.userInfo.user}
}

export default withRouter(connect(mapStateToProps, {emptyCart})(UserMenu));