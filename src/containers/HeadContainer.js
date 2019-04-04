import React from 'react';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import UserMenu from '../components/UserMenu';
import '../css/stylesheet/HeadContainer.css'

const HeadContainer = () => {
    
    return (
        <div className="head-container">
            <Logo />
            <SearchBar />
            <UserMenu />
        </div>
    )
}

export default HeadContainer;