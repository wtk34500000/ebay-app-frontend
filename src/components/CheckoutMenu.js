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
        postOrder(props.cart)
        props.addOrder(props.cart, getTotalPrice())
        props.emptyCart()
        props.history.push('/ecom/cart/checkout')
    }

    const postOrder = (cartArr) =>{
        cartArr.forEach(item => {
            createProduct(item)
              .then(product =>{
                  console.log("product obj from back end", product)
                  console.log("product obj from back end", props.user.id)
                  createOrder(props.user.id, product.product.id).then(console.log)
              })
            
        } )
    }

    const createOrder = (userId, productId)=>{
      return  fetch("http://localhost:3001/api/v1/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                order: {
                  user_id: userId,
                  product_id: productId
                }
            })
        }).then(res => res.json())
    }

    const createProduct = (item)=>{
        return fetch("http://localhost:3001/api/v1/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                product: {
                    title: item.title[0],
                    price: item.sellingStatus && item.sellingStatus[0].currentPrice[0]["__value__"],
                    img: item.galleryURL[0],
                    item_id: item.itemId[0]
                }
            })
        }).then(res => res.json())
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