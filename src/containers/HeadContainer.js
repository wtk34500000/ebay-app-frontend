import React from 'react';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import UserMenu from '../components/UserMenu';
import '../css/stylesheet/HeadContainer.css'
import { Navbar, Nav } from "react-bootstrap";
import '../css/stylesheet/SearchBar.css';
import Cart from '../components/Cart'

const HeadContainer = () => {
    
    return (
        <Navbar className="head-container" bg="light" variant="light">
            <Navbar.Brand><Logo /></Navbar.Brand>
            <Nav className="ml-auto">
                <SearchBar />
                <Cart />
                <UserMenu />
            </Nav>
        </Navbar>
    )
}

export default HeadContainer;