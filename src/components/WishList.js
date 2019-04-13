import React from 'react';
import { connect } from 'react-redux';
import WishListCard from './CartCard'
import '../css/stylesheet/CartCard.css';

const WishList = (props) =>{
    const arrOfWishList = props.wishList.map((prod, idx) =>  <WishListCard key={idx} productObj={prod}/>)
    return (
       <div className="cart-list">
           <div>
               {`Wish List: ${props.wishList.length} `}
           </div>
           {arrOfWishList}
       </div>
    )
}

const mapStateToProps = (state) => {
    return { wishList: state.userInfo.wishList }
}

export default connect(mapStateToProps)(WishList);