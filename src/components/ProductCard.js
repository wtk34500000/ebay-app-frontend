import React from 'react'
import { Card } from 'react-bootstrap';
import {clickProduct} from '../actions/productAction'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import '../css/stylesheet/ProductCard.css'


const ProductCard = (props) => {
    const url=process.env.REACT_APP_URL
    const title=props.productObj.title ? props.productObj.title[0]: " N/A"
    const img =props.productObj.galleryURL && props.productObj.galleryURL[0].length>0? props.productObj.galleryURL[0]: " N/A"
    const condition = props.productObj.condition? props.productObj.condition[0].conditionDisplayName[0]: " N/A"
    const price=props.productObj.sellingStatus[0].currentPrice[0]["@currencyId"] && props.productObj.sellingStatus[0].currentPrice[0]["__value__"] ? `${props.productObj.sellingStatus[0].currentPrice[0]["@currencyId"]} $${props.productObj.sellingStatus[0].currentPrice[0]["__value__"]}`: "N/A"


    const onClickHanlder = () => {
       props.clickProduct(props.productObj)
       props.history.push(`${url}/products/${props.productObj.title[0]}`)
    }

    return (
        <div className="product-card" onClick={onClickHanlder}>
            <Card style={{ height: '30rem'}}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title >{title}</Card.Title>
                <Card.Text >
                    Condition: {condition}
                    <br />
                    Price: {price}
                </Card.Text>
                {/* <Button onClick={onClickHanlder} variant="primary">Detail</Button> */}
            </Card.Body>
            </Card>

                
        </div>
    )
}

export default withRouter(connect(null, {clickProduct})(ProductCard));