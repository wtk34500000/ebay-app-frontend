import React from 'react'
import {connect} from 'react-redux'
import {withRouter } from 'react-router-dom';

const UserMenu = (props) => {

    const onClickHandler = () => {
        props.history.push('/cart')
    }

    return (
        <div className="user-menu">
            <button ><i className="fas fa-folder"></i></button>
            <button onClick={onClickHandler}><i className="fas fa-cart-plus"></i>{`(${props.cart.length})`}</button>
            <button>Logout</button> 
        </div>
    )
}

const mapStateToProps = (state) => {
    return {cart: state.cartInfo.cart}
}

export default withRouter(connect(mapStateToProps)(UserMenu));