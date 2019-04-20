const ADD_ORDER = "ADD_ORDER";
const CHECK_OUT = "CHECK_OUT";

export const addOrder = (cart, price) => ({type: ADD_ORDER, payload: {price, cart} })

export const checkOut = (paymentData) => ({type: CHECK_OUT, payload: paymentData})

const fetchUrl=process.env.REACT_APP_BACKEND_URL


export const postCheckout = (name, amount, tokenId, email) => {
    return (dispatch) =>{
        return fetch(`${fetchUrl}/donate`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    'Accept': 'application/json',
                    Authorization: `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({
                    name: name,
                    amount: amount,
                    stripeToken: tokenId,
                    email: email
                })
            })
            .then(res =>res.json())
            .then(paymentData => console.log("paymentData send back from backend", paymentData) || dispatch(checkOut(paymentData)))
    }
}