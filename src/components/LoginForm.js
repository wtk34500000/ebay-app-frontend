import React, { Component } from 'react'
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import '../css/stylesheet/Login.css'
import { connect } from 'react-redux'
import {loginUser} from '../actions/userAction'

class LoginForm extends Component{
    state={
        email: '',
        password:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // const url=process.env.REACT_APP_URL
        this.props.loginUser(this.state).then(()=> this.props.history.push({pathname='/welcome'}))
        this.setState({
            email: '',
            password:''
        })
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

    render(){
        return (

            <div className="Login">
            <form onSubmit={this.handleSubmit}>
              <h1>Log In: </h1>
              {this.props.error ?
              <p>Wrong email or password</p>
            :
            null}
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
                  value={this.state.password}
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
              <Button
                block
                disabled={!this.validateForm()}
                type="submit"
              >
                Login
              </Button>
            </form>
          </div>
        )
    }
}

export default withRouter(connect(null, {loginUser})(LoginForm));
