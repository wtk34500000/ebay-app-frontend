import React from 'react';
import { withRouter } from 'react-router-dom';

const Logo = (props) => {
    return (
        <div className="logo">
            <img onClick={()=> props.history.push('/welcome')} id="logo-img" src={require('../images/eclogo.png')} alt="logo"/>
        </div>
    )
}

export default withRouter(Logo);