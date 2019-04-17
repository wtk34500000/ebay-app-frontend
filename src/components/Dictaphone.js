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
            }else{
                this.props.stopListening()
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
        this.props.getProducts(this.state.input)
        this.props.history.push(`/ecom/search?q=${this.state.input}`)
    }

    handleTranscript = (msg) => {
        console.log("transcript",msg)
        this.setState({
           input: msg
        })
    }

    componentDidUpdate(preProps, preState){
        if(this.props.transcript !== preProps.transcript){
            this.handleTranscript(this.props.transcript)
            this.props.getProducts(this.state.input)
            this.props.history.push(`/ecom/search?q=${this.state.input}`)
        }
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
    autoStart: false
  }
  
export default withRouter(connect(null, {getProducts})(SpeechRecognition(options)(Dictaphone)));