import React from 'react'
import {Carousel} from "react-bootstrap";
import { connect } from 'react-redux'
import { getProducts } from '../actions/productAction'
import { withRouter } from 'react-router-dom'


const TrendSlide = (props) => {
    const url=process.env.REACT_APP_URL

    const handleOnClick = (e) => {   
        props.getProducts(e.target.name)
        props.history.push(`${url}/search?q=${e.target.name}`)
         
    }

    return (
        <Carousel>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrC7YacRFIbXCRX4HtZ7ruizLUMzsb8AmpAOMcqUIl2AxwbM-K"
                    alt="First slide"
                    name="kaws bff plush"
                    onClick={handleOnClick}
                />
                <Carousel.Caption>
                    <h3>Kaws Bff Plush</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYXblV_pVLh0RykrtQSzaWc8pqjGGIfP0lvuwNGvYxZllMNPrGg"
                    alt="Third slide"
                    name="skip hop"
                    onClick={handleOnClick}
                />
                <Carousel.Caption>
                    <h3>Skip Hop</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="data:image/jpeg;base64,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"
                    alt="Third slide"
                    name="Yeezy Boost 350 v2"
                    onClick={handleOnClick}
                />
                <Carousel.Caption>
                    <h3>Yeezy Boost 350 v2</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default withRouter(connect(null, { getProducts })(TrendSlide));