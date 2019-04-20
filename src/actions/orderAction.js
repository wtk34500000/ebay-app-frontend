const ADD_ORDER = "ADD_ORDER";
const CHECK_OUT = "CHECK_OUT";

export const addOrder = (cart, price) => ({type: ADD_ORDER, payload: {price, cart} })

export const checkOut = (paymentData) => ({type: CHECK_OUT, payload: paymentData})


export const postCheckout = (name, amount, tokenId, email) => {
    return (dispatch) =>{
        return fetch("https://ecom-shopping.herokuapp.com/api/v1/donate", {
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
            }).then(res => {
                if(res.ok) {
                    console.log("result from stripe", res.json())
                    return res.json();
                  } else {
                    throw new Error('Email or user name already existed!');
                  }
            })
            .then(paymentData => console.log("paymentData send back from backend",paymentData) || dispatch(checkOut(paymentData)))
            .catch(err=>console.log(err))
    }
}