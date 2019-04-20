import React from 'react'
import { Navbar, Nav  } from "react-bootstrap";
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import {getProducts} from '../actions/productAction'


const NavBar = (props) => {

    const onClickToysHandle =()=> {
        const toys ='toys'
        props.getProducts(toys)
        props.history.push(`/welcome/search?q=${toys}`)
    }

    const onClickMusicHandle =()=> {
        const musics ='musics'
        props.getProducts(musics)
        props.history.push(`/welcome/search?q=${musics}`)
    }

    const onClickMotorsHandle = () => {
        const motors ='motors'
        props.getProducts(motors)
        props.history.push(`/welcome/search?q=${motors}`)
    }

    const onClickSportHandle = () => {
        const sportingGood ='sporting good'
        props.getProducts(sportingGood)
        props.history.push(`/welcome/search?q=${sportingGood}`)
    }

    const onClickFashionHandle = () => {
        const fashion ='fashion'
        props.getProducts(fashion)
        props.history.push(`/welcome/search?q=${fashion}`)
    }

    const onClickElecHandle = () => {
        const electronics ='electronics'
        props.getProducts(electronics)
        props.history.push(`/welcome/search?q=${electronics}`)
    }

    const onClickHomeHandle = () => {
        const homeStationary ='home stationary'
        props.getProducts(homeStationary)
        props.history.push(`/welcome/search?q=${homeStationary}`)
    }

    const onClickArtHandle = () => {
        const art ='art'
        props.getProducts(art)
        props.history.push(`/welcome/search?q=${art}`)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href="/ecom">Home</Nav.Link>
                <Nav.Link onClick={onClickMotorsHandle}>Motors</Nav.Link>
                <Nav.Link onClick={onClickFashionHandle}>Fashion</Nav.Link>
                <Nav.Link onClick={onClickElecHandle}>Electronics</Nav.Link>
                <Nav.Link onClick={onClickHomeHandle}>Home & Garden</Nav.Link>
                <Nav.Link onClick={onClickArtHandle}>Collectibles & Art</Nav.Link>
                <Nav.Link onClick={onClickSportHandle}>Sporting Goods</Nav.Link>
                <Nav.Link onClick={onClickMusicHandle}>Music</Nav.Link>
                <Nav.Link onClick={onClickToysHandle}>Toys</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default withRouter(connect(null, {getProducts})(NavBar));