import React from 'react'
import {connect} from 'react-redux'
import {withRouter } from 'react-router-dom';
import {emptyCart} from '../actions/cartAction';
import { getUserHistory } from '../actions/userAction';
import {Dropdown, NavDropdown} from 'react-bootstrap'

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

    const wishListHandler = () => {
        props.history.push(`/ecom/${props.user.id}/wishlist`)
    }

    const onClickProfileHandler= ()=>{
        props.history.push(`/ecom/${props.user.id}/profile`)
    }

    return (
        <NavDropdown title={props.user.first_name } id="basic-nav-dropdown">
                    <Dropdown.Item onClick={onClickCartHandler}>CART <i className="fas fa-cart-plus"></i>{`(${props.cart.length})`}</Dropdown.Item>
                    <Dropdown.Item onClick={onClickProfileHandler}>PROFILE <i className="fas fa-user"></i></Dropdown.Item>
                    <Dropdown.Item onClick={onClickHisHandler}> HISTORY <i className="fas fa-folder"></i></Dropdown.Item>
                    <Dropdown.Item onClick={wishListHandler}>WISHLIST <i className="far fa-heart"></i></Dropdown.Item>
                    <Dropdown.Item onClick={logoutHandler}>LOGOUT <i className="fas fa-sign-out-alt"></i></Dropdown.Item>
        </NavDropdown>
    )
}

const mapStateToProps = (state) => {
    
    return {cart: state.cartInfo.cart, user: state.userInfo.user}
}

export default withRouter(connect(mapStateToProps, {emptyCart, getUserHistory})(UserMenu));