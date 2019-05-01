const ADD_ORDER = "ADD_ORDER";
const CHECK_OUT = "CHECK_OUT";

export const addOrder = (cart, price) => ({type: ADD_ORDER, payload: {price, cart} })

export const checkOut = (paymentData) => ({type: CHECK_OUT, payload: paymentData})

const fetchUrl=process.env.REACT_APP_BACKEND_URL


export const postCheckout = (name, amount, tokenId, email) => {
    return (dispatch) =>{
        return fetch(`${fetchUrl}/api/v1/donate`, {
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



export const createOrder = (userId, productId)=>{
    return  fetch("http://localhost:3001/api/v1/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
              order: {
                user_id: userId,
                product_id: productId
              }
          })
      }).then(res => {
          if(res.ok){
             return res.json()
          }else{
            throw new Error('cannot create order');
          }
      }).catch(error => console.log(error))
  }