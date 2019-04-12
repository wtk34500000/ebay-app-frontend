import React from 'react'
import {connect} from 'react-redux'
import {withRouter } from 'react-router-dom';
import {emptyCart} from '../actions/cartAction';
import { getUserHistory } from '../actions/userAction';
import {Dropdown} from 'react-bootstrap'

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
            {/* <text>{props.user? props.user.first_name:""}</text>
            <button className="menu-item" onClick={onClickHisHandler}><i className="fas fa-folder"></i></button> */}
            <button className="menu-item" onClick={onClickCartHandler}><i className="fas fa-cart-plus"></i>{`(${props.cart.length})`}</button>
            <Dropdown>
                <Dropdown.Toggle variant="Info" id="dropdown-basic">
                {props.user? props.user.first_name:""} <i className="fas fa-user-cog"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item >PROFILE</Dropdown.Item>
                    <Dropdown.Item onClick={onClickHisHandler}><i className="fas fa-folder"></i></Dropdown.Item>
                    <Dropdown.Item onClick={logoutHandler}>LOGOUT</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/* <button onClick={logoutHandler} className="menu-item">Logout</button>  */}
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return {cart: state.cartInfo.cart, user: state.userInfo.user}
}

export default withRouter(connect(mapStateToProps, {emptyCart, getUserHistory})(UserMenu));