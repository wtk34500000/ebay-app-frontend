const initialState={
    products: [],
    searchTerm: "",
    currentProduct: null,
    productFilterArr: [],
    categoryFilterArr: []
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case "CATEGORY_PRODUCT":
            if(action.payload.toLowerCase() === "all")
            {
                return {...state, categoryFilterArr: [...state.products]}  
            }else{
                const categoryArr=state.products.filter(prod=> prod.primaryCategory[0].categoryName[0]===action.payload)
                return {...state,  categoryFilterArr: categoryArr}
            }
        case "FILTER_PRODUCT":
            const priceFilterArr=state.products.filter(prod => parseInt(prod.sellingStatus[0].currentPrice[0]["__value__"]) < parseInt(action.payload))
            return  {...state, productFilterArr: priceFilterArr}
        case "CLICK_PRODUCT":
           return {...state, currentProduct: action.payload}
        case "LOAD_PRODUCT":
            return { ...state, products: action.payload }
        default:
            return state
    }

}

export default productReducer;