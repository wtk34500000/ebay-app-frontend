import React, {Component} from 'react'
import HeadContainer from './HeadContainer';
import NarBar from '../components/NavBar'
import BottomContainer from './BottomContainer';
import {withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'

import '../css/stylesheet/HomeContainer.css'

class HomeContainer extends Component{

    render(){
        const userId =this.props.user.id

        if(userId){
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
            )
        }
        else{
           return (
                    this.props.history.push('/signup')
           )
        }
    }
}

const mapStateToProps = (state) => {
    return { user: state.userInfo.user }
}

export default withRouter(connect(mapStateToProps)(HomeContainer));