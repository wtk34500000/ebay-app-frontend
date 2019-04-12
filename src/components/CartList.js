import React from 'react'
import CartCard from './CartCard'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

const CartList = (props) => {
    const arrOfCartItems = props.cart.map((prod, idx) =>  <CartCard key={idx} productObj={prod}/>)
    return (
        <div className="cart-list">
            <h2>{`Shopping Cart (${arrOfCartItems.length} item(s))`}</h2>
            {arrOfCartItems.length < 1? <h3>You dont have any items in your cart.</h3>: " "}
            {arrOfCartItems.length < 1? <button onClick={()=>props.history.push('/ecom')}>Start Shopping</button>:""}
            {arrOfCartItems}   
        </div>

    )
}

const mapStateToProps = (state) => {
    return {cart: state.cartInfo.cart}
}


export default withRouter(connect(mapStateToProps)(CartList));