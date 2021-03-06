const initialState={
    user: null,
    userHis: {},
    wishList: []
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "EMPTY_WISH_LIST":
            localStorage.removeItem("wishList")
            return {wishList: []}
        case "LOAD_WISH_LIST":
            return {...state, wishList: action.payload}
        case "REMOVE_FROM_WISH_LIST":
            const newWishList = state.wishList.filter(item => item.title[0] !== action.payload)
            localStorage.setItem("wishList", JSON.stringify(newWishList))
            return {...state, wishList: newWishList }
        case "ADD_TO_WISH_LIST":
            if(!state.wishList.includes(action.payload)){
                const newWishList = [action.payload, ...state.wishList]
                localStorage.setItem("wishList", JSON.stringify(newWishList))
                return {...state, wishList: newWishList}
            }
                localStorage.setItem("wishList", JSON.stringify(state.wishList))
                return {...state}
        case "LOAD_USER_HISTORY":
            return {...state, userHis: action.payload}
        case "ADD_USER":
            return { ...state, user: action.payload }
        default:
            return state
    }

}

export default userReducer;