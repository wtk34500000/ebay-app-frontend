import React from 'react';
import '../css/stylesheet/CartCard.css';
import {removeProduct} from '../actions/cartAction';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {removeFromWishList} from '../actions/userAction'

const CartCard = (props) => {
        console.log(props.history)
    const onClickHandler = () => {
        if(props.history.location.pathname === "/ecom/cart"){
            props.removeProduct(props.productObj.title[0])
        }else{
            props.removeFromWishList(props.productObj.title[0])
        }
                  
    }

    return (
        <div className="cart-card">
            <div className="card-img">
                <img src={props.productObj.galleryURL[0]} alt="pic"/>
            </div>
            <div className="card-info">
                <p>{props.productObj.title[0]}</p>
            </div>
            <div className="card-info">
            <p>Price: {`${props.productObj.sellingStatus[0].currentPrice[0]["@currencyId"]} $${props.productObj.sellingStatus[0].currentPrice[0]["__value__"]}`}</p>
            </div>
            <div className="card-info remove-button">
                <button onClick={onClickHandler}>REMOVE <i class="fas fa-trash-alt" style={{color: "black"}}></i></button>
            </div>
                
        </div>
    )
}

export default withRouter(connect(null, { removeProduct, removeFromWishList })(CartCard));