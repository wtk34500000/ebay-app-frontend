import React from 'react';
import '../css/stylesheet/LandingPage.css'
import { Link } from 'react-router-dom'

const LandingPage= () => {
    return (
        <div className="absolute">

                <div className="landing-header">
                <img className="landing-image" src="https://moneyinc.com/wp-content/uploads/2017/01/ecommerce-shopping-retail-ss-1920.jpg"/>
                    <h1>Welcome to Ecom</h1>
		            <Link to="/signup" class="btn btn-lg btn-success"><i class="fas fa-angle-double-right"></i> Signup</Link>
                </div>            
        </div>
        
    )
}

export default LandingPage;