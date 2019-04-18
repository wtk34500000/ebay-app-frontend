import React from 'react';
import { withRouter } from 'react-router-dom';

const Logo = (props) => {
    const url=process.env.REACT_APP_URL
    return (
        <div className="logo">
            <img onClick={()=> props.history.push(url)} id="logo-img" src={require('../images/eclogo.png')} alt="logo"/>
        </div>
    )
}

export default withRouter(Logo);