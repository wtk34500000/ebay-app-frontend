const initialState={
    products: [],
    searchTerm: "",
    user: {},
    cart: []
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CART":
            return { ...state, cart: [...state.cart, action.payload]}
        case "ADD_USER":
            return { user: action.payload }
        case "LOAD_PRODUCT":
            return { products: action.payload }
        default:
            return state
    }

}

export default productReducer;