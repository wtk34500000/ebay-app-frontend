import React from 'react';
import {connect} from 'react-redux';
import{ ListGroup } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import '../css/stylesheet/ConfirmationPage.css'

const ConfirmationPage = (props) => {
    const url=process.env.REACT_APP_URL

    const getArrOfCartItems = () => {
       const arrOfCartItems = props.order.cartItems.map((prod, idx) =>  {
            const img =prod.galleryURL[0];
            const title = prod.title[0];
            const itemPrice = prod.sellingStatus[0].currentPrice[0]['__value__'];
         return <ListGroup.Item key={idx} className="list-item" > <img src={img} alt=''/> <p>{ `${title} - $${itemPrice}`}</p></ListGroup.Item>
         })
         return arrOfCartItems
    }

    return (
        <div id="order-info">
            {props.paymentData? <div id="order-header">
                <Link to={url}>Back to Home Page</Link>
                <h3>Order Comfirmation Id: {props.paymentData.created} </h3>
                <h1>Thank you for your purchase!!</h1>
                
                <ListGroup id="list-group">
                    {getArrOfCartItems()}
                </ListGroup>
            </div>: <Redirect to={url}/>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        order: state.orderInfo.order,
        paymentData: state.orderInfo.paymentData,
    }
}

export default connect(mapStateToProps)(ConfirmationPage);