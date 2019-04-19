import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {CategoryProduct} from '../actions/productAction'

class CategoryFilter extends Component{
    state={
        isClicked: false,
        value: ''
    }

    handleFilterButton= () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

     handleOnSelect = (e) => {
        const url=process.env.REACT_APP_URL
         this.setState({
            value: e.target.value
         }, () => {
                this.props.CategoryProduct(this.state.value)
                this.props.history.push({pathname: `/search/category?q=${this.state.value}`}) 
            })
    }

    render(){
        const unique = [...new Set(this.props.products.map(prod => prod.primaryCategory[0].categoryName[0]))];
        const arrOfOpt=unique.map((opt, idx) => <option key={idx} >{opt}</option> )

        return (
            <div id="category">
                <div id="filter-button">
                    <button onClick={this.handleFilterButton}>Filter by Category: </button>
                </div>
                <div id="filter-category">
                    {this.state.isClicked? 
                        <select onChange={this.handleOnSelect}>
                        <option value="" selected disabled hidden>Choose here</option>
                        <option value="All" >All</option>
                            {arrOfOpt}
                        </select>
                    : null}
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {products: state.productInfo.products}
}

export default withRouter(connect(mapStateToProps, {CategoryProduct})(CategoryFilter));
