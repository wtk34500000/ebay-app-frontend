import React from 'react';
import {connect} from 'react-redux';
// import CartCard from './CartCard'
import{ ListGroup } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'

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
        <div id="order-info">
            {props.paymentData? <div id="order-info">
                <h3>Order Comfirmation Id: {props.paymentData.created} </h3>
                <h1>Thank you for your purchase!!</h1>
                
                <ListGroup>
                    {getArrOfCartItems()}
                </ListGroup>
                <Link to='/ecom'>Back to Home Page</Link>
            </div>: <Redirect to="/ecom"/>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        order: state.orderInfo.order,
        paymentData: state.orderInfo.paymentData,
    }
}

export default connect(mapStateToProps)(ComfirmationPage);