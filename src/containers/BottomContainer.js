import React from 'react'
import {connect} from 'react-redux'
import ProductsListContainer from './ProductsListContainer'
import SideBarContainer from './SideBarContainer'
import TrendSlide from '../components/TrendSlide'
import '../css/stylesheet/BottomContainer.css'
import { Route, Switch, withRouter} from 'react-router-dom';
import Loader from 'react-loader-spinner';

const BottomContainer = (props) => {
    return(
        <div className="bottom-container">
                
                {/* <Switch>
                     <SideBarContainer/>,
                    < Route exact path ='/ecom/search/filter' render={()=> <ProductsListContainer products={props.productFilterArr}/>} />
                    < Route exact path ='/ecom/search/category' render={()=> <ProductsListContainer products={props.categoryFilterArr}/>} />
                    < Route exact path ='/ecom/search' render={()=> {return <div>{props.products.length>0? <ProductsListContainer products={props.products}/>: <Loader type="ThreeDots" color="#00BFFF" height={80} width={80}/>}</div>}} />
                </Switch>
                <Switch>
                    < Route exact path ='/ecom'  component={TrendSlide}/>
                                                            
                </Switch> */}
                <Switch>
                    < Route exact path ='/ecom/search/filter' render={()=> {
                                                            return <div>
                                                                        <SideBarContainer/>, 
                                                                        <ProductsListContainer products={props.productFilterArr}/>
                                                                   </div>
                                                                }} />
                </Switch>

                <Switch>
                    < Route exact path ='/ecom/search/category' render={()=> {
                                                            return <div>
                                                                        <SideBarContainer/>, 
                                                                        <ProductsListContainer products={props.categoryFilterArr}/>
                                                                   </div>
                                                                }} />
                </Switch>

                <Switch>
                    < Route exact path ='/ecom/search' render={()=> {
                                                            return <div>
                                                                        <SideBarContainer/>, 
                                                                       {props.products.length>0? <ProductsListContainer products={props.products}/>: <Loader type="ThreeDots" color="#00BFFF" height={80} width={80}/>}
                                                                  </div>
                                                                
                                                                }} />
                </Switch>
                <Switch>
                    < Route exact path ='/ecom'  component={TrendSlide}/>
                                                            
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