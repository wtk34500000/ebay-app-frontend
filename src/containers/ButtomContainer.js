import React from 'react'
import ProductsListContainer from '../containers/ProductsListContainer'
import {} from 'react-redux'
import '../css/stylesheet/ButtonContainer.css'


const ButtonContainer = () => {
    return(
        <div className="button-container">
           {/* <SideBarContainer /> */}
           <ProductsListContainer />
        </div>
    )
}

export default ButtonContainer;