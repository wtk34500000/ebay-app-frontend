import React from 'react';
import { connect } from 'react-redux'

const ShowSuggestList = () => {
    const productArr = props.products.map(product => </>)
    return (
        <div id="show-suggest-list">

        </div>
    )
}

const mapStateToProps = (state) => {
    return {products: state.productInfo.products}
}

export default connect(mapStateToProps)(ShowSuggestList);