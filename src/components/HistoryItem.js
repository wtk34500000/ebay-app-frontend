import React from 'react'
import '../css/stylesheet/HistoryItem.css'

const HistoryItem = (props) => {
    return (
        <div className="history-item">
            <div className="order-info">
                <div className='order-date'>
                    <p>ORDER DATE</p>
                    <p>{props.productObj.created_at}</p>
                </div>
                <div></div> 
                <div className="order-total">
                    <p>ORDER TOTAL</p>
                    <p>{`US $${props.productObj.price}`}</p>
                </div>
            </div>
            <div className="item-info">
                <div className="item-img"> 
                    <img src={props.productObj.img} alt=""/>
                </div>
                <div className="item-title">
                        <p>{`${props.productObj.title}`}</p>
                        <p>{props.productObj.item_id}</p>
                </div>
                <div>
                    <p>ITEM PRICE</p>
                    <p>{`US $${props.productObj.price}`}</p>
                </div>
            </div>            
        </div>
    )
}

export default HistoryItem;