import React, {Component} from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import {postCheckout, createOrder, addOrder} from '../actions/orderAction';
import { createProduct } from '../actions/productAction';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import {emptyCart} from '../actions/cartAction'

class PaymentForm extends Component {
    state={
        name: "",
        amount: '',
        email: '',
        error: null,
        isClick: false
    }

    componentDidMount(){
        this.setState({
            amount: Math.ceil(this.getTotalPrice())
        })
    }

    // componentDidUpdate(prevState, prevProps){
    //     const url=process.env.REACT_APP_URL
    //     if(this.props.paymentData!== prevProps.paymentData){
    //      this.props.history.push(`${url}/cart/checkout/confirmation`)
    //     }
    // }

    getTotalPrice = () => {
        let totalPrice =0;
        this.props.cart.forEach(item => {
               const price=item.sellingStatus && item.sellingStatus[0].currentPrice[0]["__value__"] ? Number(item.sellingStatus[0].currentPrice[0]["__value__"]) : 0
               totalPrice+=price
        })
        return totalPrice.toFixed(2);
    }


    handleOnChange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // const onClickHandler = () =>{
    //     const url=process.env.REACT_APP_URL
    //     postOrder(props.cart)
    //     props.addOrder(props.cart, getTotalPrice())
    //     props.emptyCart()
    //     props.history.push(`${url}/cart/checkout`)
    // }

     postOrder = (cartArr) =>{
        cartArr.forEach(item => {
            createProduct(item)
              .then(product =>{
                  createOrder(this.props.user.id, product.product.id)
              }) 
        } )
    }

    handleSubmit =  (e)=>{
        e.preventDefault();
        const url=process.env.REACT_APP_URL
        this.setState({isClick: true})

        this.postOrder(this.props.cart)
        this.props.addOrder(this.props.cart, this.getTotalPrice())
        this.props.emptyCart()
            
        try {            
           this.props.stripe.createToken({name: this.state.name}).then((result) => {
                if(result.token){
                    const name=this.state.name
                    const amount= this.state.amount
                    const tokenId=result.token.id
                    const email=this.state.email
                    this.props.postCheckout(name, amount, tokenId, email).then(()=> this.props.history.push(`${url}/cart/checkout/confirmation`))
                }else{
                   this.setState({
                        error: result.error.message
                   }, ()=>this.props.history.push(`${url}/cart/checkout`))
                }
              })
        } catch(e) {
            throw e;
        }
    }

    render(){
        return(
            <main className="container">
                <form onSubmit={this.handleSubmit} className="form-group mt-3 border border-promary rounded shadow-lg p-3">
                    {this.state.error? <li style={{color:"red"}}>{this.state.error}</li> : ''}
                    <input type="text" className="input-group my-1 p-1 border border-dark" name="name" placeholder="Name" value={this.state.name} onChange={this.handleOnChange} required/>
                    <input type="text" className="input-group my-1 p-1 border border-dark" placeholder="Amount" value={this.state.amount} onChange={this.handleOnChange}/>
                    <input type="email" className="input-group my-1 p-1 border border-dark" placeholder="Email address" name="email" value={this.state.email} onChange={this.handleOnChange} required/>
                    <label>CC Number -- Exp. Date -- CVC -- Zip Code <i class="fab fa-cc-visa" style={{color: "black"}}></i>  <i class="fab fa-cc-mastercard" style={{color: "red"}}></i>  <i class="fab fa-cc-amex" style={{color: "blue"}}></i></label>
                    <CardElement className="p-2 border border-dark"/>
                    {this.state.isClick? <Loader type="Rings" color="green" height={80} width={80} />: <button className="btn btn-primary border border-darl shadow mt-3">Charge It!</button>}
                </form>
            </main>
        )
    }
}

const mapStateToProps =(state)=> {
    return {
        // paymentData: state.orderInfo.paymentData,
        // totalPrice: state.orderInfo.order.price,
        cart: state.cartInfo.cart,
        user: state.userInfo.user
    }
}

export default injectStripe(withRouter(connect(mapStateToProps, {postCheckout, addOrder, emptyCart})(PaymentForm)))