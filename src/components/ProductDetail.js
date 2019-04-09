import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {addCart} from '../actions/cartAction';
import { withRouter, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/stylesheet/ProductShow.css'



const ProductDetail = (props) => {
    const title=props.productObj.title[0]? props.productObj.title[0]: " N/A"
    const img =props.productObj.galleryURL[0]? props.productObj.galleryURL[0]: " N/A"
    const condition = props.productObj.condition? props.productObj.condition[0].conditionDisplayName[0]: " N/A"
    const price=`${props.productObj.sellingStatus[0].currentPrice[0]["@currencyId"]} $${props.productObj.sellingStatus[0].currentPrice[0]["__value__"]}`? `${props.productObj.sellingStatus[0].currentPrice[0]["@currencyId"]} $${props.productObj.sellingStatus[0].currentPrice[0]["__value__"]}`: "N/A"
    
    const onClickHanlder = () => {    
        props.addCart(props.productObj)
        props.history.push('/ecom')
    }
    
    return (
        <div className="product-container">
            <div className="home-page">
                <Link to='/ecom'><span>Back to Home Page</span></Link>
            </div>

            <div id="product-item">
                <div className="product-img">
                    <img src={img}/>
                </div>

                <div className="product-info">
                    <div className="product-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="product-condition">
                        <p>Condition: {condition}</p>
                    </div>
                    
                    <div className="price-button">
                        <div className="product-price">
                            <p>Price: {price}</p>
                        </div>
                        <div className="cart-button"> 
                            <button onClick={onClickHanlder} >Add to Cart</button>
                        </div>
                    </div>
                   
                        <div className="wish-button"> 
                                <button><i class="far fa-heart"></i> Add to Wish list</button>
                        </div>
                   
                    
                </div>
            </div>
 {/* <Card style={{ width: '18rem' }}>
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
            </Card> */}
        </div>
        
    )
}

const mapStateToProps = (state) =>{
    return {
        productObj: state.productInfo.currentProduct, 
          // price: state.orderInfo.order.price, 
        }
  }

export default withRouter(connect(mapStateToProps, {addCart})(ProductDetail));