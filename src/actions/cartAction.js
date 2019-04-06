export const addCart = (prod)=> ({type: "ADD_CART", payload: prod})
export const removeProduct = (name) => ({type: "REMOVE_PRODUCT", payload: name})
export const loadCart = (cart) => ({type:"LOAD_CART", payload: cart})
export const emptyCart = () => ({type: "EMPTY_CART"})