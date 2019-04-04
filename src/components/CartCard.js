import React from 'react';
import '../css/stylesheet/CartCard.css';
import {removeProduct} from '../actions/cartAction';
import {connect} from 'react-redux';

const CartCard = (props) => {

    const onClickHandler = () => {
        console.log("click")
        props.removeProduct(props.productObj.title[0])
    }

    return (
        <div className="cart-card">
            <div className="card-img">
                <img src={props.productObj.galleryURL[0]}/>
            </div>
            <div className="card-info">
                <h3>{props.productObj.title[0]}</h3>
                <p>Price: {`${props.productObj.sellingStatus[0].currentPrice[0]["@currencyId"]} $${props.productObj.sellingStatus[0].currentPrice[0]["__value__"]}`}</p>
                <button onClick={onClickHandler}>Remove</button>
            </div>
        </div>
    )
}

export default connect(null, {removeProduct})(CartCard)