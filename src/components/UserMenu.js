import React from 'react'
import {connect} from 'react-redux'
import {withRouter } from 'react-router-dom';
import {emptyCart} from '../actions/cartAction';
import { getUserHistory, emptyWishList } from '../actions/userAction';
import {Dropdown, NavDropdown} from 'react-bootstrap'

const UserMenu = (props) => {
    const url=process.env.REACT_APP_URL

    const onClickHisHandler = ()=>{
        props.getUserHistory(props.user.id).then(()=> props.history.push(`/${props.user.id}/history`))
    }

    const logoutHandler = () => {
        localStorage.clear()
        props.emptyCart()
        props.emptyWishList()
        setTimeout(()=> props.history.push({pathname: '/'}), 300)
        // props.history.push('/')
    }

    const wishListHandler = () => {
        props.history.push(`/${props.user.id}/wishlist`)
    }

    const onClickProfileHandler= ()=>{
        props.history.push(`/${props.user.id}/profile`)
    }

    return (
        <NavDropdown title={props.user.first_name } id="basic-nav-dropdown">
                    {/* <Dropdown.Item onClick={onClickCartHandler}>CART <i className="fas fa-cart-plus"></i>{`(${props.cart.length})`}</Dropdown.Item> */}
                    <Dropdown.Item onClick={onClickProfileHandler}>PROFILE <i className="fas fa-user"></i></Dropdown.Item>
                    <Dropdown.Item onClick={onClickHisHandler}> HISTORY <i className="fas fa-folder"></i></Dropdown.Item>
                    <Dropdown.Item onClick={wishListHandler}>WISHLIST <i className="fas fa-heart"></i></Dropdown.Item>
                    <Dropdown.Item onClick={logoutHandler}>LOGOUT <i className="fas fa-sign-out-alt"></i></Dropdown.Item>

        </NavDropdown>
    )
}

const mapStateToProps = (state) => {
    
    return {cart: state.cartInfo.cart, user: state.userInfo.user}
}

export default withRouter(connect(mapStateToProps, {emptyCart, getUserHistory, emptyWishList})(UserMenu));