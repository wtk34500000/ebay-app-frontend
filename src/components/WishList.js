import React from 'react';
import { connect } from 'react-redux';
import WishListCard from './CartCard'
import { Link } from 'react-router-dom'
import '../css/stylesheet/CartCard.css';

const WishList = (props) =>{
    const url=process.env.REACT_APP_URL

    const arrOfWishList = props.wishList.map((prod, idx) =>  <WishListCard key={idx} productObj={prod}/>)
    return (
       <div className="cart-list">
           <div className="home-page">
                <Link to={url}><span>Back to Home Page</span></Link>
            </div>
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