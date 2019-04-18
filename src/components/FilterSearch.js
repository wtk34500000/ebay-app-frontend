import React, {Component} from 'react';
import Slider from 'react-rangeslider';
import { filterProduct } from '../actions/productAction';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../css/stylesheet/FilterSearch.css';


class FilterSearch extends Component {
     state = {
        volume: 0,
        isClicked: false
      }

    handleOnChange = (value) => {
      const url=process.env.REACT_APP_URL
      this.props.filterProduct(value)
      this.props.history.push(`${url}/search/filter?price=${value}`)
      this.setState({
        volume: value
      })

    }

    handleFilterButton= () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }
   
    render() {
      let { volume } = this.state;
      const step = 5;
      const min=getMaxProductPrice(this.props.productsArr).length>0 ? parseInt(getMaxProductPrice(this.props.productsArr)[getMaxProductPrice(this.props.productsArr).length-1].sellingStatus[0].currentPrice[0]["__value__"]): 0;
      const max=getMaxProductPrice(this.props.productsArr).length>0 ? parseInt(getMaxProductPrice(this.props.productsArr)[0].sellingStatus[0].currentPrice[0]["__value__"]): 0;
      const labels={ [min+1]: `$${min+1}`, [max/2]: `$${max/2}`, [max]: `$${max+1}`}
      return (

          <div id="slider">
            <div id="filter-button">
                <button onClick={this.handleFilterButton}>Filter by price: </button>
            </div>
            <div>
                {this.state.isClicked? <Slider
                    min={min+1}
                    max={max+1}
                    value={volume}
                    step={step}
                    labels={labels}
                    onChange={this.handleOnChange}
                />: null}
            </div>
          </div>
      )
    }
  }

  const getMaxProductPrice = (productsArr) =>{
     return productsArr.sort((a, b)=> {
                const aPrice=parseInt(a.sellingStatus[0].currentPrice[0]["__value__"])
                const bPrice=parseInt(b.sellingStatus[0].currentPrice[0]["__value__"])
                if(aPrice > bPrice){
                    return -1
                }else if(aPrice < bPrice){
                    return 1
                }else{
                    return 0
                }
                
            })
  }

  const mapStateToProps = (state) => {
        return {searchTerm : state.productInfo.searchTerm, productsArr: state.productInfo.products}
  }

export default withRouter(connect(mapStateToProps, { filterProduct })(FilterSearch));