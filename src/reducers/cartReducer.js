const initialState={
    cart: [] 
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case "REMOVE_PRODUCT":
            return {cart: state.cart.filter(prod => prod.title[0]!== action.payload )}
        case "ADD_CART":
            return {cart: [...state.cart, action.payload]}
        default:
            return state
    }

}

export default cartReducer;