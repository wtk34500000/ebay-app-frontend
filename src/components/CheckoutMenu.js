import React from 'react'
import { connect } from 'react-redux'

const CheckoutMenu = (props) => {
    let totalPrice =0;
    props.cart.forEach(item => {
           const price=item.sellingStatus && item.sellingStatus[0].currentPrice[0]["__value__"] ? Number(item.sellingStatus[0].currentPrice[0]["__value__"]) : 0
           totalPrice+=price
    });
    return (
        <div className="checkout">
            <button className="checkout-button">Go to Checkout</button>
            <div className="item-price-info">
                <p className="move-left">{`item (${props.cart.length})`}</p>
                <p className="move-right"> {`$${totalPrice}`}</p>
            </div>
            <div className="item-price-info">
                <p className="move-left" >Shipping:</p> 
                <p className="move-right">Free</p>
            </div>
            <hr />
            <div className="item-price-info">
                <p className="move-left">Total:</p>
                <p className="move-right" >{`$${totalPrice}`}</p>
            </div>
           
          
        </div>
    )
}

const mapStateToProps = (props) => {
    return {
        cart: props.cartInfo.cart
    }
}

export default connect(mapStateToProps)(CheckoutMenu);