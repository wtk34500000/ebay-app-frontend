import React from 'react'
import { connect } from 'react-redux'
import {addOrder} from '../actions/orderAction';
import {withRouter} from 'react-router-dom'
import {emptyCart} from '../actions/cartAction'

const CheckoutMenu = (props) => {

    const getTotalPrice = () => {
        let totalPrice =0;
        props.cart.forEach(item => {
               const price=item.sellingStatus && item.sellingStatus[0].currentPrice[0]["__value__"] ? Number(item.sellingStatus[0].currentPrice[0]["__value__"]) : 0
               totalPrice+=price
        })
        return totalPrice.toFixed(2);
    }
    

    const onClickHandler = () =>{
        props.history.push({pathname: '/cart/checkout'})
    }

    return (
        <div className="checkout">
            <button onClick={onClickHandler} className="checkout-button">Go to Checkout</button>
            <div className="checkout-item-info">
                <div className="item-price-info">
                    <div>
                        <p>{`item (${props.cart.length})`}</p>
                    </div>
                    <div>
                        <p> {`$${getTotalPrice()}`}</p>
                    </div>
                </div>
                <div className="item-price-info">
                    <div>
                        <p>Shipping:</p> 
                    </div>
                    <div>
                        <p>Free</p>
                    </div>
                </div>
                <div className="item-price-info">
                    <div>
                        <p>Fee:</p> 
                    </div>
                    <div>
                        <p>{`$${(Math.ceil(getTotalPrice())-getTotalPrice()).toFixed(2)}`}</p>
                    </div>
                </div>
                <hr />
                <div className="item-price-info">
                    <div>
                        <p>Total:</p>
                    </div>
                    <div>
                        <p>{`$${Math.ceil(getTotalPrice())}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (props) => {
    return {
        cart: props.cartInfo.cart,
        user: props.userInfo.user
    }
}

export default withRouter(connect(mapStateToProps, {addOrder, emptyCart})(CheckoutMenu));