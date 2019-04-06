const initialState={
    cart: [] 
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case "EMPTY_CART":
            return {cart: []}
        case "LOAD_CART":
            const newArr1=action.payload
            return {cart: newArr1}
        case "REMOVE_PRODUCT":
            const removeArr =state.cart.filter(prod => prod.title[0]!== action.payload )
            localStorage.setItem("cart", JSON.stringify(removeArr))
            return {cart: removeArr}
        case "ADD_CART":
            const newArr=[...state.cart, action.payload]
            localStorage.setItem("cart", JSON.stringify(newArr))
            return {cart: [...state.cart, action.payload]}
        default:
            return state
    }

}

export default cartReducer;


// var names = [];
// names[0] = prompt("New member name?");
// localStorage.setItem("names", JSON.stringify(names));

// //...
// var storedNames = JSON.parse(localStorage.getItem("names"));