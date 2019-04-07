const initialState={
    order: {
        cartItems: [],
        price: 0
    }
}

const orderReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_ORDER":
            return {order: {cartItems: action.payload.cart, price: action.payload.price}}

        default:
            return state
    }

}

export default orderReducer;