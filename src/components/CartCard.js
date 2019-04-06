import React from 'react';
import '../css/stylesheet/CartCard.css';
import {removeProduct} from '../actions/cartAction';
import {connect} from 'react-redux';

const CartCard = (props) => {
    
    console.log(props.productObj)
    const onClickHandler = () => {
        console.log("click")
        props.removeProduct(props.productObj.title[0])
    }

    return (
        <div className="cart-card">
            <div className="card-img">
                <img src={props.productObj.galleryURL[0]} alt="pic"/>
            </div>
            <div className="card-info">
                <p>{props.productObj.title[0]}</p>
            </div>
            <div className="remove-button">
                <p>Price: {`${props.productObj.sellingStatus[0].currentPrice[0]["@currencyId"]} $${props.productObj.sellingStatus[0].currentPrice[0]["__value__"]}`}</p>
                <button onClick={onClickHandler}>Remove</button>
            </div>
                
        </div>
    )
}

export default connect(null, {removeProduct})(CartCard)