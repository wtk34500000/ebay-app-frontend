import React from 'react'
import HeadContainer from './HeadContainer';
import ButtonContainer from './ButtomContainer';
import {withRouter } from 'react-router-dom';

const HomeContainer = () =>{
    return (
        <div className="home-container">
             <HeadContainer />
             <ButtonContainer />
        </div>
    )
}

export default withRouter(HomeContainer);