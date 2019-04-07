import React from 'react';
import {connect} from 'react-redux';
// import CartCard from './CartCard'
import{ ListGroup } from 'react-bootstrap'

const ComfirmationPage = (props) => {

    const getArrOfCartItems = () => {
       const arrOfCartItems = props.order.cartItems.map((prod, idx) =>  {
            const title = prod.title[0];
            const itemPrice = prod.sellingStatus[0].currentPrice[0]['__value__'];
         return <ListGroup.Item>{`${title} - $${itemPrice}`}</ListGroup.Item>
         })
         return arrOfCartItems
    }

    return (
        <div className="order-info">
            <h1>Order Comfirmation Id: </h1>
            <ListGroup>
                {getArrOfCartItems()}
            </ListGroup>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("show my current order???????", state.orderInfo.order)
    return {order: state.orderInfo.order}
}

export default connect(mapStateToProps)(ComfirmationPage);