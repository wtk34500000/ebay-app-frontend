import React from 'react';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import UserMenu from '../components/UserMenu';
import '../css/stylesheet/HeadContainer.css'

const HeadContainer = () => {
    
    return (
    <div className="head-container">
        <div>
            <Logo />
        </div>
        <div>
            <SearchBar />
        </div>
        <div >
            <UserMenu />
        </div>  
    </div>
    )
}

export default HeadContainer;