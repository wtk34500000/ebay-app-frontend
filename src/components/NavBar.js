import React from 'react'
import { Navbar, Nav  } from "react-bootstrap";


const NavBar = () => {
    
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href="/ecom">Home</Nav.Link>
                <Nav.Link href="/ecom/b/motors">Motors</Nav.Link>
                <Nav.Link href="ecom/b/fashion">Fashion</Nav.Link>
                <Nav.Link href="ecom/b/electronics">Electronics</Nav.Link>
                <Nav.Link href="ecom/b/home">Home & Garden</Nav.Link>
                <Nav.Link href="ecom/b/arts">Collectibles & Art</Nav.Link>
                <Nav.Link href="ecom/b/sporting">Sporting Goods</Nav.Link>
                <Nav.Link href="ecom/b/music">Music</Nav.Link>
                <Nav.Link href="ecom/b/toys">Toys</Nav.Link>
            </Nav>
            
        </Navbar>
    )
}

export default NavBar;