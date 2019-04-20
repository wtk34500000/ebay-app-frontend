const ADD_USER ="ADD_USER"
const LOAD_USER_HISTORY ="LOAD_USER_HISTORY"
const ADD_TO_WISH_LIST ="ADD_TO_WISH_LIST"
const REMOVE_FROM_WISH_LIST ="REMOVE_FROM_WISH_LIST"
const LOAD_WISH_LIST ="LOAD_WISH_LIST"
const EMPTY_WISH_LIST="EMPTY_WISH_LIST"

const addUser = (user) =>({type: ADD_USER, payload: user})
const loadUserhistory =(userHistories)=>({type: LOAD_USER_HISTORY, payload: userHistories})

export const emptyWishList = () => ({type: EMPTY_WISH_LIST})
export const addToWishList =(prod) => ({type:ADD_TO_WISH_LIST, payload: prod })
export const removeFromWishList = (prod) => ({type: REMOVE_FROM_WISH_LIST, payload: prod})
export const loadWishList= (wishArr) => ({type: LOAD_WISH_LIST,  payload: wishArr})

const fetchUrl=process.env.REACT_APP_BACKEND_URL

export const getUserHistory = (id) => {
    return (dispatch) => {
        return fetch(`${fetchUrl}/users/${id}`)
        .then(res => res.json())
        .then(userInfo => dispatch(loadUserhistory(userInfo.user)))
    }
}

export const deleteUser = (id, token)=> (dispatch)=> {
        return fetch(`${fetchUrl}/users/${id}`, {
            method: "DELETE",
            headers:{
                "content-type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
}

export const createUser = (user) =>{
        return (dispatch) => {
            return fetch(`${fetchUrl}/signup`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": 'application/json'
                },
                body: JSON.stringify(
                    {user: {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    user_name: user.user_name,
                    email: user.email,
                    password: user.password
                }})
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                  } else {
                    throw new Error('Email or user name already existed!');
                  }
            })
            .then(user => {
                localStorage.setItem("token", user.jwt)
                dispatch(addUser(user.user))
            }).catch(error => console.log(error))
        }       
}

export const loginUser = (user) =>{
    return (dispatch) => {
        return  fetch(`${fetchUrl}/login`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(
                {user: {
                email: user.email,
                password: user.password
            }})
        })
        .then(res => {
            if (res.ok) {
                return res.json();
              } else {
                throw new Error('Invalid email or password!');
              }
        })
        .then(user => {
            localStorage.setItem("token", user.jwt)
            dispatch(addUser(user.user))
        })
        .catch(error=> console.log(error))
    }
}

export const currentUser = (token) =>{
    return (dispatch) => {
        return fetch(`${fetchUrl}/current_user`, {
            method: "GET",
            headers: {
              "content-type": "application/json",
              "accepts": "application/json",
              Authorization: `Bearer ${token}`
            }
          })
            .then(resp => resp.json())
            .then(user => {
                dispatch(addUser(user.user))
            })
        }  
}

