const initialState={
    user: {},
    userHis: {},
    wishList: []
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOAD_USER_HISTORY":
            console.log("3 inside userreducer", action.payload, action.type)
            return {...state, userHis: action.payload}
        case "ADD_USER":
            return { ...state, user: action.payload }
        default:
            return state
    }

}

export default userReducer;