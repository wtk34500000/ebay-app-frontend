import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {clickProduct} from '../actions/productAction'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';


const ProductCard = (props) => {

    const onClickHanlder = () => {
        console.log("prod card", props.productObj)
       props.clickProduct(props.productObj)
       props.history.push(`/products/${props.productObj.title[0]}`)
    }

    return (
        <div className="product-card">
            <Card style={{ height: '30rem'}}>
            <Card.Img variant="top" src={props.productObj.galleryURL[0]} />
            <Card.Body>
                <Card.Title >{props.productObj.title[0]}</Card.Title>
                <Card.Text >
                    Condition: {props.productObj.condition[0].conditionDisplayName[0]}
                    <br />
                    Price: {`${props.productObj.sellingStatus[0].currentPrice[0]["@currencyId"]} $${props.productObj.sellingStatus[0].currentPrice[0]["__value__"]}`}
                </Card.Text>
                <Button onClick={onClickHanlder} variant="primary">Detail</Button>
            </Card.Body>
            </Card>

                
        </div>
    )
}

export default withRouter(connect(null, {clickProduct})(ProductCard));