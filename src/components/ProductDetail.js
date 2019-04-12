import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {addCart} from '../actions/cartAction';
import { withRouter, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/stylesheet/ProductShow.css'
import ShowSuggestList from '../containers/ShowSuggestList';



const ProductDetail = (props) => {
    let title, img, condition, price;
    if(props.productObj){
        title=props.productObj.title[0]
        img =props.productObj.galleryURL[0]
        condition = props.productObj.condition[0].conditionDisplayName[0]
        price=`${props.productObj.sellingStatus[0].currentPrice[0]["@currencyId"]} $${props.productObj.sellingStatus[0].currentPrice[0]["__value__"]}`
    }
    // const title=props.productObj.title[0]
    // const img =props.productObj.galleryURL[0]
    // const condition = props.productObj.condition[0].conditionDisplayName[0]
    // const price=`${props.productObj.sellingStatus[0].currentPrice[0]["@currencyId"]} $${props.productObj.sellingStatus[0].currentPrice[0]["__value__"]}`
    
    const onClickHanlder = () => {    
        props.addCart(props.productObj)
        props.history.goBack()
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
            <div id="show-related-list">
                    <ShowSuggestList />
            </div>
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