import React from 'react'
import HeadContainer from './HeadContainer';
import NarBar from '../components/NavBar'
import ButtonContainer from './ButtomContainer';
import {withRouter } from 'react-router-dom';
import '../css/stylesheet/Narbar.css'

const HomeContainer = () =>{
    return (
        <div className="home-container">
             <HeadContainer />
             <div className="nar-bar">
                <NarBar />
             </div>
            
             <ButtonContainer />
        </div>
    )
}

export default withRouter(HomeContainer);