import React from 'react'
import FilterSearch from '../components/FilterSearch'
import CategoryFilter from '../components/CategoryFilter'
import {connect} from 'react-redux'
import '../css/stylesheet/SideBarContainer.css'

const SideBarContainer = (props) => {
    return (
        <div className="side-bar-container">
            <div className="side-bar-left">
                <FilterSearch />
            </div>
            <div className="side-bar-right">
                <CategoryFilter />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {products: state.productInfo.products}
}

export default connect(mapStateToProps)(SideBarContainer)