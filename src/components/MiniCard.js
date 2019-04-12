import React from 'react';
import {clickProduct} from '../actions/productAction';
import {connect} from 'react-redux';

const MiniCard = (props) => {
    const img =props.productObj.galleryURL[0]? props.productObj.galleryURL[0]: '';
    return (
        <div className='minicard-img'>
            <img onClick={()=>props.clickProduct(props.productObj)} src={img} alt=""/>
        </div>
    )
}

export default connect(null, {clickProduct})(MiniCard);