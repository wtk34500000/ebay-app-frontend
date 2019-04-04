import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {addCart} from '../actions/cartAction';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';



const ProductDetail = (props) => {
    console.log("inside product detail", props)
    const title=props.productObj.title[0];
    const img =props.productObj.galleryURL[0];
    const condition = props.productObj.condition[0].conditionDisplayName[0]
    const price=`${props.productObj.sellingStatus[0].currentPrice[0]["@currencyId"]} $${props.productObj.sellingStatus[0].currentPrice[0]["__value__"]}`
    
    const onClickHanlder = () => {    
        props.addCart(props.productObj)
        props.history.push('/')
    }
    
    return (
        <div className="product-detail">
           <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ img? img: "N/A"} />
            <Card.Body>
                <Card.Title>{title? title: "N/A"}</Card.Title>
                <Card.Text>
                    Condition: {condition? condition : "N/A"}
                    <br />
                    Price: {price? price : "N/A"}
                </Card.Text>
                <Button onClick={onClickHanlder} variant="primary">Add to Cart</Button>
            </Card.Body>
            </Card>
        </div>
    )
}


export default withRouter(connect(null, {addCart})(ProductDetail));