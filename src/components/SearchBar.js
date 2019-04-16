import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getProducts} from '../actions/productAction'
import {withRouter} from 'react-router-dom'
import {Button, Form, FormControl} from "react-bootstrap";
import Dictaphone from '../components/Dictaphone'
import '../css/stylesheet/SearchBar.css'


class SearchBar extends Component {
    state={
        input: '',
        micOn: false
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

    handleMicClick = () =>{
        this.setState({
            micOn: !this.state.micOn
        })
    }

    render(){
        return (
            <div id="search-bar">
                <Form inline onSubmit={this.onClickHandler}>
                    <FormControl type="text" name="input" value={this.state.input} onChange={this.onChangeHandler} placeholder="Search" className="mr-sm-2 search" />
                    {/* {this.state.micOn? <Button onClick={this.handleMicClick} variant="outline-primary"><i class="fas fa-microphone"></i></Button> : <Button onClick={this.handleMicClick} variant="outline-primary"><i class="fas fa-microphone-slash"></i></Button>} */}
                </Form>
                <Dictaphone className="mic"/>
            </div>
        )
    }
}

export default withRouter(connect(null, {getProducts})(SearchBar));