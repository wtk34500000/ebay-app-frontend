import React, {Component} from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import {Button} from 'react-bootstrap';
import { getProducts } from '../actions/productAction';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
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

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.props.transcript)
        this.props.getProducts(this.props.transcript)
        this.props.resetTranscript();
        this.props.history.push(`/ecom/search?q=${this.props.transcript}`)
    }

  render() {
    const {
      transcript,
      browserSupportsSpeechRecognition
    } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div className="voice-search-input">
          <form onSubmit={this.handleSubmit}>
                <input id="input" type="text" value={transcript}/>
          </form>
        {this.state.isMicOn?
        <Button onClick={this.handleClick}><i class="fas fa-microphone"></i></Button> :
        <Button onClick={this.handleClick}><i class="fas fa-microphone-slash"></i></Button> 
        }
        {/* <span>
          {transcript}
        </span> */}
      </div>
    )
  }
}

Dictaphone.propTypes = propTypes

const options = {
    autoStart: false
  }
  
 
export default withRouter(connect(null, {getProducts})(SpeechRecognition(options)(Dictaphone)));