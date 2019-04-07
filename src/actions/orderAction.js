const ADD_ORDER = "ADD_ORDER";

export const addOrder = (cart, price) => ({type: ADD_ORDER, payload: {price, cart} })
