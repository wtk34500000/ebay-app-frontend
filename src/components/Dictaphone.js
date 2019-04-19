import React, {Component} from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import {Button} from 'react-bootstrap';
import { getProducts } from '../actions/productAction';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {FormControl, Form} from 'react-bootstrap'
import '../css/stylesheet/Dictaphone.css'

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  finalTranscript: PropTypes.string,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}

class Dictaphone extends Component {
    state={
        isMicOn: false,
        input: ''
    }

    handleClick = () =>{
        this.setState({
            isMicOn: !this.state.isMicOn
        }, ()=> {
            if(this.state.isMicOn){
                this.props.startListening()
            }
        })
        this.props.resetTranscript();
    }

    handleOnChange = (e) =>{
        if(!this.state.isMicOn){
            this.setState({
                input: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.searchProduct(this.state.input)
    }

    componentDidUpdate(preProps, preState){
        if(this.props.finalTranscript !== preProps.finalTranscript){
            // this.handleTranscript(this.props.transcript)
            this.setState({
                input: this.props.finalTranscript
             }, ()=>  this.props.getProducts(this.state.input))
            // this.searchProduct(this.state.input)
            // this.props.getProducts(this.state.input)
            setTimeout(()=> this.props.history.push(`/search?q=${this.state.input}`), 200)
            // this.props.history.push(`/ecom/search?q=${this.state.input}`)
        }
    }

    searchProduct = (term) =>{
        const url=process.env.REACT_APP_URL
        this.props.getProducts(term)
        this.props.history.push({
            pathname: '/search',
            search: `?q=${term}`
        })
    }

  render() {
    const {
      browserSupportsSpeechRecognition
    } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }
    
    return (
      <div className="voice-search-input">
            <Form inline onSubmit={this.handleSubmit}>
                <FormControl id="input" type="text" name="input" onChange={this.handleOnChange} value={this.state.input} placeholder="Search" className="mr-sm-2 search" />
            </Form>
            {this.state.isMicOn?
                <Button onClick={this.handleClick}><i className="fas fa-microphone"></i></Button> :
                <Button onClick={this.handleClick}><i className="fas fa-microphone-slash"></i></Button> 
            }
      </div>
    )
  }
}

Dictaphone.propTypes = propTypes

const options = {
    autoStart: false,
    continuous: false,
  }
  
export default withRouter(connect(null, {getProducts})(SpeechRecognition(options)(Dictaphone)));