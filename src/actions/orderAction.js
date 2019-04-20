const ADD_ORDER = "ADD_ORDER";
const CHECK_OUT = "CHECK_OUT";

export const addOrder = (cart, price) => ({type: ADD_ORDER, payload: {price, cart} })

export const checkOut = (paymentData) => ({type: CHECK_OUT, payload: paymentData})


export const postCheckout = (name, amount, tokenId, email) => {
    return (dispatch) =>{
        return fetch("http://localhost:3001/api/v1/donate", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({
                    name: name,
                    amount: amount,
                    stripeToken: tokenId,
                    email: email
                })
            }).then(res => console.log("text text",res) || res.json()).then(paymentData => {
                dispatch(checkOut(paymentData))
            }
                 )
    }
}