import React from 'react';
import { connect } from 'react-redux'

import MiniCard from '../components/MiniCard'

const ShowSuggestList = (props) => {
    const arrOfCartItems = props.products.map((prod, idx) =>  <MiniCard key={idx} productObj={prod}/>)
    return (
        <div id="show-suggest-list">
             {arrOfCartItems}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {products: state.productInfo.products}
}

export default connect(mapStateToProps)(ShowSuggestList);