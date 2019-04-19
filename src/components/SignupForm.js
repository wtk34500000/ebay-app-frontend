import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import {createUser} from '../actions/userAction'
import {connect} from 'react-redux'



class SignupForm extends Component{
    state={
        email: '',
        password:'',
        first_name: '',
        last_name: '',
        user_name: ''
    }

    validateForm() {
        return (this.state.email.length > 0 && this.state.password.length > 0 
            && this.state.first_name.length > 0 && this.state.last_name.length > 0
            && this.state.user_name.length > 0);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const url=process.env.REACT_APP_URL
        this.props.createUser(this.state).then(()=> this.props.history.push(url))
            this.setState({
                email: '',
                password:'',
                first_name: '',
                last_name: '',
                user_name: ''
            })
        // setTimeout(()=> this.props.history.push('/ecom'), 300)
    }

    handleClick = () => {
        this.props.history.push('/login')
    }

    render(){
        return (
            <div className="Login">
            <h1>Sign Up: </h1>
            {/* <form onSubmit={this.handleSubmit}>
             <h1>Sign Up: </h1>
            <FormGroup controlId="first_name">
                <FormControl
                autoFocus
                type="text"
                placeholder="First Name"
                value={this.state.first_name}
                name="first_name"
                onChange={this.handleChange}
                
                />
            </FormGroup>
            <FormGroup controlId="last_name">
                <FormControl
                value={this.state.last_name}
                name="last_name"
                placeholder="Last Name"
                onChange={this.handleChange}
                type="text"
                />
            </FormGroup>
            <FormGroup controlId="user_name">
                <FormControl
                autoFocus
                type="text"
                placeholder="User Name"
                value={this.state.user_name}
                name="user_name"
                onChange={this.handleChange}
                />
            </FormGroup>
            <FormGroup controlId="email">
                <FormControl
                autoFocus
                type="email"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
                />
            </FormGroup>
            <FormGroup controlId="password">
                <FormControl
                autoFocus
                type="password"
                placeholder="Password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
                />
            </FormGroup>
            <Button
                block
                disabled={!this.validateForm()}
                type="submit"
            >
                Sign Up
            </Button>
            <Button
                block
                onClick={this.handleClick}
            >
                Log In
            </Button>
            
            </form> */}
            </div>
        )

        
    }
}


export default withRouter(connect(null, {createUser})(SignupForm));