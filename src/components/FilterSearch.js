import React, {Component} from 'react'
import Slider from 'react-rangeslider'


class FilterSearch extends Component {
     state = {
        volume: 0
      }

    handleOnChange = (value) => {
        console.log(value);
        
    //   this.setState({
    //     volume: value
    //   })
    }
   
    render() {
        console.log(Slider)
      let { volume } = this.state
      return (
        <Slider
          value={volume}
          onChange={this.handleOnChange}
        />
      )
    }
  }

export default FilterSearch;