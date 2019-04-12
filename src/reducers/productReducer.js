const initialState={
    products: [],
    searchTerm: "",
    currentProduct: null,
    productFilterArr: []
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case "FILTER_PRODUCT":
            return  {...state, productFilterArr: state.products.filter(prod => parseInt(prod.sellingStatus[0].currentPrice[0]["__value__"]) < parseInt(action.payload))}
        case "CLICK_PRODUCT":
           return {...state, currentProduct: action.payload}
        case "LOAD_PRODUCT":
            return { ...state, products: action.payload }
        default:
            return state
    }

}

export default productReducer;