import React, {Component} from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import {postCheckout} from '../actions/orderAction'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

class PaymentForm extends Component {
    state={
        name: "",
        amount: ''
    }

    componentDidMount(){
        console.log("totalPrice", this.props.totalPrice)
        this.setState({
            amount: this.props.totalPrice
        })
    }

    componentDidUpdate(prevState, prevProps){
        console.log("preProps", prevProps)
        console.log("prevState", prevState)
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
                const name=this.state.name
                const amount= this.state.amount
                const tokenId=token.id
                this.props.postCheckout(name, amount, tokenId)
                // this.props.history.push('/ecom/cart/checkout/comfirmation')
                // fetch("http://localhost:3001/api/v1/donate", {
                //     method: "POST",
                //     headers: {
                //         "content-type": "application/json"
                //     },
                //     body: JSON.stringify({
                //         name: this.state.name,
                //         amount: this.state.amount,
                //         stripeToken: token.id
                //     })
                // }).then(res => res.json()).then()
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
                    <input type="text" className="input-group my-1 p-1 border border-dark" name="name" placeholder="Name" value={this.state.name} onChange={this.handleOnChange}/>
                    <input type="text" className="input-group my-1 p-1 border border-dark" placeholder="Amount" value={this.state.amount} onChange={this.handleOnChange}/>
                    <label>CC Number -- Exp. Date ---- CVC</label>
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