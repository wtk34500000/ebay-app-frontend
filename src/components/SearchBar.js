import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getProducts} from '../actions/productAction'

class SearchBar extends Component {
    state={
        input: ''
    }

    onChangeHandler = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    onClickHandler = () => {
        console.log("Clicked search")
        this.props.getProducts(this.state.input)
    }

    render(){
        return (
            <div className="search-bar">
                <input type="text" name="input" value={this.state.input} onChange={this.onChangeHandler}/>
                <button id="search-button" onClick={this.onClickHandler}><i className="fas fa-search"></i></button>
            </div>
        )
    }
}

export default connect(null, {getProducts})(SearchBar);