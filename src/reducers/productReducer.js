const initialState={
    products: [],
    searchTerm: "",
    currentProduct:{}
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        
        case "CLICK_PRODUCT":
        console.log('production reducer', action.type)
           return {...state, currentProduct: action.payload}
      
        case "LOAD_PRODUCT":
            return { ...state, products: action.payload }
        default:
            return state
    }

}

export default productReducer;