import React from 'react'
import {connect} from 'react-redux'
import ProductsListContainer from './ProductsListContainer'
import SideBarContainer from './SideBarContainer'
import TrendSlide from '../components/TrendSlide'
import '../css/stylesheet/BottomContainer.css'
import { Route, Switch, withRouter} from 'react-router-dom';
import Loader from 'react-loader-spinner';

const BottomContainer = (props) => {
    const { products, productFilterArr, categoryFilterArr } = props
    return(
        <div className="bottom-container"> 
                    {products.length>0? <SideBarContainer/>: " "}
                <Switch>
                    <Route exact path ='/ecom/search/filter' render={()=> <ProductsListContainer products={productFilterArr}/>} />
                    <Route exact path ='/ecom/search/category' render={()=> <ProductsListContainer products={categoryFilterArr}/>} />
                    <Route exact path ='/ecom/search' render={()=> products.length>0? <ProductsListContainer products={products}/>: <Loader type="ThreeDots" color="#00BFFF" height={80} width={80}/>} />
                    <Route exact path ='/ecom'  component={TrendSlide}/> 
                 </Switch>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.productInfo.products, 
        productFilterArr: state.productInfo.productFilterArr,
        categoryFilterArr: state.productInfo.categoryFilterArr
    }
}

export default withRouter(connect(mapStateToProps)(BottomContainer));