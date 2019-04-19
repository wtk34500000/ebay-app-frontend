import React from 'react';
import '../css/stylesheet/LandingPage.css'
import { Link } from 'react-router-dom'

const LandingPage= () => {
    return (
        <div className="absolute">

                <div className="landing-header">
                <img className="landing-image" src="https://moneyinc.com/wp-content/uploads/2017/01/ecommerce-shopping-retail-ss-1920.jpg" alt=""/>
                    <h1>Welcome to Ecom-SHOP</h1>
		            <Link to='/signup' className="btn btn-lg btn-success"><i className="fas fa-angle-double-right"></i> SIGNUP</Link>
                </div>            
        </div>   
    )
}

export default LandingPage;