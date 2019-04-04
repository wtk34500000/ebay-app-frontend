import React from 'react'
import {connect} from 'react-redux'
import ProductCard from '../components/ProductCard'


const ProductsListContainerContainer = (props) => {
    const arrOfProducts = props.products.map((product, idx) => <ProductCard key={idx} productObj={product}/>)
    
    return(
        <div className="products-list">
            {arrOfProducts}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {products: state.products}
}

export default connect(mapStateToProps)(ProductsListContainerContainer);