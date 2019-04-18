// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import {getProducts} from '../actions/productAction'
// import {withRouter} from 'react-router-dom'
// import Dictaphone from './Dictaphone'
// import '../css/stylesheet/SearchBar.css'


// class SearchBar extends Component {
//     state={
//         input: '',
//         micOn: false
//     }

//     onChangeHandler = (e) => {
//         this.setState({
//             input: e.target.value
//         })
//     }

//     handleMicClick = () =>{
//         this.setState({
//             micOn: !this.state.micOn
//         })
//     }

//     render(){
//         return (
//             <div id="search-bar">
//                 <Dictaphone className="mic"/>
//             </div>
//         )
//     }
// }

// export default withRouter(connect(null, {getProducts})(SearchBar));