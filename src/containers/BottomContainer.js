import React from 'react'
import ProductsListContainer from './ProductsListContainer'
import SideBarContainer from './SideBarContainer'
import '../css/stylesheet/BottomContainer.css'
import { Route, Switch, withRouter} from 'react-router-dom';





const BottomContainer = (props) => {
    return(
        <div className="bottom-container">
            <div>
                <Switch>
                    < Route path ='/ecom/search' render={()=> <SideBarContainer/>} />
                </Switch>
            </div>
            <div>
                <ProductsListContainer />
            </div>

        </div>
    )
}

export default withRouter(BottomContainer);