const ADD_ORDER = "ADD_ORDER";
const CHECK_OUT = "CHECK_OUT";

export const addOrder = (cart, price) => ({type: ADD_ORDER, payload: {price, cart} })

export const checkOut = (paymentData) => ({type: CHECK_OUT, payload: paymentData})


export const postCheckout = (name, amount, tokenId) => {
    return (dispatch) =>{
        return fetch("http://localhost:3001/api/v1/donate", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    amount: amount,
                    stripeToken: tokenId
                })
            }).then(res => res.json()).then(paymentData => {
                console.log('payment data from backend', paymentData)
                
                dispatch(checkOut(paymentData))
                

            }
                 )
    }
}