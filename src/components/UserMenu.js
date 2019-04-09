import React from 'react'
import {connect} from 'react-redux'
import {withRouter } from 'react-router-dom';
import {emptyCart} from '../actions/cartAction';
import { getUserHistory } from '../actions/userAction';

const UserMenu = (props) => {

    const onClickCartHandler = () => {
        props.history.push('/ecom/cart')
    }

    const onClickHisHandler = ()=>{
        props.getUserHistory(props.user.id)
        setTimeout(()=> props.history.push(`/ecom/${props.user.id}/history`), 1000)  
    }

    const logoutHandler = () => {
        localStorage.clear()
        props.emptyCart()
        props.history.push('/signup')
    }

    return (
        <div className="user-menu">
            <text>{props.user? props.user.first_name:""}</text>
            <button className="menu-item" onClick={onClickHisHandler}><i className="fas fa-folder"></i></button>
            <button className="menu-item" onClick={onClickCartHandler}><i className="fas fa-cart-plus"></i>{`(${props.cart.length})`}</button>
            <button onClick={logoutHandler} className="menu-item">Logout</button> 
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return {cart: state.cartInfo.cart, user: state.userInfo.user}
}

export default withRouter(connect(mapStateToProps, {emptyCart, getUserHistory})(UserMenu));