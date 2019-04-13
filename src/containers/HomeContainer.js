import React, {Component} from 'react'
import HeadContainer from './HeadContainer';
import NarBar from '../components/NavBar'
import BottomContainer from './BottomContainer';
import {withRouter } from 'react-router-dom';
import {connect} from 'react-redux'

import '../css/stylesheet/HomeContainer.css'

class HomeContainer extends Component{

    render(){
        return (
            <div className="home-container">
                <div className="head">
                    <HeadContainer />
                </div>
                <hr />
                <div className="nar-bar">
                    <NarBar />
                </div>
                <div className="bottom">
                    <BottomContainer />
                </div>
                
            </div>
    )}
}

const mapStateToProps = (state) => {
    return { user: state.userInfo.user }
}

export default withRouter(connect(mapStateToProps)(HomeContainer));