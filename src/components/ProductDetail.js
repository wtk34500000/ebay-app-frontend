import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {addCart} from '../actions/cartAction';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';



const ProductDetail = (props) => {
    const title=props.productObj.title[0]? props.productObj.title[0]: " N/A"
    const img =props.productObj.galleryURL[0]? props.productObj.galleryURL[0]: " N/A"
    const condition = props.productObj.condition? props.productObj.condition[0].conditionDisplayName[0]: " N/A"
    const price=`${props.productObj.sellingStatus[0].currentPrice[0]["@currencyId"]} $${props.productObj.sellingStatus[0].currentPrice[0]["__value__"]}`? `${props.productObj.sellingStatus[0].currentPrice[0]["@currencyId"]} $${props.productObj.sellingStatus[0].currentPrice[0]["__value__"]}`: "N/A"
    
    const onClickHanlder = () => {    
        props.addCart(props.productObj)
        props.history.push('/econ')
    }
    
    return (
        <div className="product-detail">
           <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Condition: {condition}
                    <br />
                    Price: {price}
                </Card.Text>
                <Button onClick={onClickHanlder} variant="primary">Add to Cart</Button>
            </Card.Body>
            </Card>
        </div>
    )
}


export default withRouter(connect(null, {addCart})(ProductDetail));