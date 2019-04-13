import React from 'react';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import UserMenu from '../components/UserMenu';
import '../css/stylesheet/HeadContainer.css'
import { Navbar, Nav, Form} from "react-bootstrap";

const HeadContainer = () => {
    
    return (
        <Navbar className="head-container" bg="light" variant="light">
            <Navbar.Brand><Logo /></Navbar.Brand>
        <Nav className="mr-auto">
                <UserMenu />
        </Nav>
            <Form inline>
                {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button> */}
                <SearchBar />
            </Form>
        </Navbar>



    // <div className="head-container">
    //     <div className="icon-container">
    //         <Logo />
    //     </div>
    //     <div>
    //         <SearchBar />
    //     </div>
    //     <div id="user-menu">
    //         <UserMenu />
    //     </div>  
    // </div>
    )
}

export default HeadContainer;