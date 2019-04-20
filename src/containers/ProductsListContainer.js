import React from 'react'
// import {connect} from 'react-redux'
import ProductCard from '../components/ProductCard'
import '../css/stylesheet/ProductContainer.css'

const ProductsListContainer = (props) => {
    const arrOfProducts = props.products.map((product, idx) => <ProductCard key={idx} productObj={product}/>)  
    return(
        <div className="products-list">
            {arrOfProducts}
        </div>
    )
}

export default ProductsListContainer;