import React from 'react'
import {connect} from 'react-redux'
import ProductsListContainer from './ProductsListContainer'
import SideBarContainer from './SideBarContainer'
import '../css/stylesheet/BottomContainer.css'
import { Route, Switch, withRouter} from 'react-router-dom';





const BottomContainer = (props) => {
    return(
        <div className="bottom-container">
                <Switch>
                    < Route exact path ='/ecom/search/filter' render={()=> {
                                                            return <div>
                                                                        <SideBarContainer/>, 
                                                                        <ProductsListContainer products={props.productFilterArr}/>
                                                                   </div>
                                                                }} />
                </Switch>

                <Switch>
                    < Route exact path ='/ecom/search' render={()=> {
                                                            return <div>
                                                                        <SideBarContainer/>, 
                                                                       {props.products.length>0? <ProductsListContainer products={props.products}/>: <h1>Loading.........</h1>}
                                                                  </div>
                                                                
                                                                }} />
                </Switch>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {products: state.productInfo.products, productFilterArr: state.productInfo.productFilterArr}
}

export default withRouter(connect(mapStateToProps)(BottomContainer));