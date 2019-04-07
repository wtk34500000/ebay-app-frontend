import React from 'react'
import {connect} from 'react-redux'
import ProductCard from '../components/ProductCard'
import '../css/stylesheet/ProductCard.css'



const ProductsListContainerContainer = (props) => {
    const arrOfProducts = props.products.map((product, idx) => <ProductCard key={idx} productObj={product}/>)
    // const newArr =[]
    // const insideNewArr=[]

    // for(let i = 1; i<=arrOfProducts.length; i++){
    //     if(i % 5 === 0){
    //         newArr.push(insideNewArr)
    //     }
    //     insideNewArr.push(arrOfProducts[i-1])
    // }

    
    return(
        <div className="products-list">
            {arrOfProducts}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {products: state.productInfo.products}
}

export default connect(mapStateToProps)(ProductsListContainerContainer);