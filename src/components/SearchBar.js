import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getProducts} from '../actions/productAction'
import {withRouter} from 'react-router-dom'
import {Button, Form} from "react-bootstrap";
import '../css/stylesheet/SearchBar.css'


class SearchBar extends Component {
    state={
        input: ''
    }

    onChangeHandler = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    onClickHandler = (e) => {
        e.preventDefault()
        this.props.getProducts(this.state.input)
        this.props.history.push(`/ecom/search?q=${this.state.input}`)
    }

    render(){
        return (
            // <div >
                <Form inline>
                    <Form.Control type="text" size="lg" name="input" value={this.state.input} onChange={this.onChangeHandler} placeholder="Search" className="mr-sm-2" />
                    <Button onClick={this.onClickHandler} variant="outline-primary"><i className="fas fa-search"></i></Button>

                    {/* <form className="search-bar" onSubmit={this.onClickHandler}>
                    <input type="text" name="input" value={this.state.input} onChange={this.onChangeHandler}/>
                    <button onClick={this.onClickHandler} id="search-button"><i className="fas fa-search"></i></button>
                </form> */}
                </Form>
                
                
            // </div>
        )
    }
}

export default withRouter(connect(null, {getProducts})(SearchBar));