import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {addCart} from '../actions/productAction'
import {connect} from 'react-redux'


const ProductCard = (props) => {

    const onClickHanlder = () => {
        props.addCart(props.productObj)
    }

    return (
        <div className="product-card">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.productObj.galleryURL[0]} />
            <Card.Body>
                <Card.Title>{props.productObj.title[0]}</Card.Title>
                <Card.Text>
                    Condition: {props.productObj.condition[0].conditionDisplayName[0]}
                    <br />
                    Price: {`${props.productObj.sellingStatus[0].currentPrice[0]["@currencyId"]} $${props.productObj.sellingStatus[0].currentPrice[0]["__value__"]}`}
                </Card.Text>
                <Button onClick={onClickHanlder} variant="primary">Add to Cart</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default connect(null, {addCart})(ProductCard);