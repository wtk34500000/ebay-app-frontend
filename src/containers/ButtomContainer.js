import React from 'react'
import ProductsListContainer from '../containers/ProductsListContainer'
// import SideBarContainer from '../containers/SideBarContainer'


const ButtonContainer = () => {
    return(
        <div className="button-container">
           <ProductsListContainer />
           {/* <SideBarContainer /> */}
        </div>
    )
}

export default ButtonContainer;