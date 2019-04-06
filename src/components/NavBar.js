import React from 'react'
import { Navbar, Nav  } from "react-bootstrap";


const NavBar = () => {
    
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href="/econ">Home</Nav.Link>
                <Nav.Link href="/econ/b/motors">Motors</Nav.Link>
                <Nav.Link href="econ/b/fashion">Fashion</Nav.Link>
                <Nav.Link href="econ/b/electronics">Electronics</Nav.Link>
                <Nav.Link href="econ/b/home">Home & Garden</Nav.Link>
                <Nav.Link href="econ/b/arts">Collectibles & Art</Nav.Link>
                <Nav.Link href="econ/b/sporting">Sporting Goods</Nav.Link>
                <Nav.Link href="econ/b/music">Music</Nav.Link>
                <Nav.Link href="econ/b/toys">Toys</Nav.Link>
            </Nav>
            
        </Navbar>
    )
}

export default NavBar;