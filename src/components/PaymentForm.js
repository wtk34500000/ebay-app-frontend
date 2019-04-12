import React, {Component} from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import {postCheckout} from '../actions/orderAction'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

class PaymentForm extends Component {
    state={
        name: "",
        amount: '',
        email: '',
        error: ''
    }

    componentDidMount(){

        this.setState({
            amount: Math.ceil(this.props.totalPrice)
        })
    }

    componentDidUpdate(prevState, prevProps){
        if(this.props.paymentData!== prevProps.paymentData){
         this.props.history.push('/ecom/cart/checkout/comfirmation')
        }
    }


    handleOnChange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit =  (e)=>{
        e.preventDefault();
        try {
            console.log("inside try and catch", this.props.stripe)
            
           this.props.stripe.createToken({name: this.state.name}).then(({token}) => {
               console.log("here???$$$$$",token)
                if(token){
                    const name=this.state.name
                    const amount= this.state.amount
                    const tokenId=token.id
                    const email=this.state.email
                    this.props.postCheckout(name, amount, tokenId, email)
                }else{
                   this.setState({
                        error: 'Invalid credit card'
                   }, ()=>this.props.history.push('/ecom/cart/checkout'))
                }
              })
            //   , () =>  this.props.history.push('/ecom/cart/checkout/comfirmation')
        } catch(e) {
            throw e;
        }
            // console.log(" JON SY is here")
            //  this.props.history.push('/ecom/cart/checkout/comfirmation')
               
    }

    render(){
        return(
            <main className="container">
                <form onSubmit={this.handleSubmit} className="form-group mt-3 border border-promary rounded shadow-lg p-3">
                    {this.state.error? <li>{this.state.error}</li> : ''}
                    <input type="text" className="input-group my-1 p-1 border border-dark" name="name" placeholder="Name" value={this.state.name} onChange={this.handleOnChange}/>
                    <input type="text" className="input-group my-1 p-1 border border-dark" placeholder="Amount" value={this.state.amount} onChange={this.handleOnChange}/>
                    <input type="text" className="input-group my-1 p-1 border border-dark" placeholder="Email address" name="email" value={this.state.email} onChange={this.handleOnChange}/>
                    <label>CC Number -- Exp. Date ---- CVC <i class="fab fa-cc-visa" style={{color: "black"}}></i>  <i class="fab fa-cc-mastercard" style={{color: "red"}}></i>  <i class="fab fa-cc-amex" style={{color: "blue"}}></i></label>
                    <CardElement className="p-2 border border-dark"/>
                    <button className="btn btn-primary border border-darl shadow mt-3">Charge It!</button>
                </form>
            </main>
        )
    }
}

const mapStateToProps =(state)=> {
    return {
        paymentData: state.orderInfo.paymentData,
        totalPrice: state.orderInfo.order.price
    }
}

export default injectStripe(withRouter(connect(mapStateToProps, {postCheckout})(PaymentForm)))