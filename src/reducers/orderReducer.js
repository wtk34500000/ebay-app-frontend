const initialState={
    order: {
        cartItems: [],
        price: 0
    },
    paymentData: null
}

const orderReducer = (state = initialState, action) => {
    switch(action.type){
        case "CHECK_OUT":
            return {
                    order: {...state.order },  
                    paymentData: action.payload
                    }
        case "ADD_ORDER":
            return {order: {cartItems: action.payload.cart, price: action.payload.price}}

        default:
            return state
    }

}

export default orderReducer;