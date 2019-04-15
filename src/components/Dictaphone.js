import React, {Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'

class Dictaphone extends Component {
  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div>
        <button onClick={resetTranscript}>reset</button>
        <span>{transcript}</span>
      </div>
    )
  }
}

const options = {
    autoStart: false
  }
  
  export default SpeechRecognition(options)(Dictaphone)