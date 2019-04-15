import React from 'react';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import UserMenu from '../components/UserMenu';
import '../css/stylesheet/HeadContainer.css'
import { Navbar, Nav } from "react-bootstrap";
import '../css/stylesheet/SearchBar.css';
import Dictaphone from '../components/Dictaphone'

const HeadContainer = () => {
    
    return (
        <Navbar className="head-container" bg="light" variant="light">
            <Navbar.Brand><Logo /></Navbar.Brand>

                <SearchBar />
                <Dictaphone />
            <Nav className="ml-auto">
                <UserMenu />
            </Nav>
        </Navbar>
    )
}

export default HeadContainer;