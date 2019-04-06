const addUser = (user) =>({type: "ADD_USER", payload: user})

export const createUser = (user) =>{
        return (dispatch) => {
            return fetch("http://localhost:3001/api/v1/signup",{
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
            .then(res => res.json())
            .then(user => {
                console.log(user)
                localStorage.setItem("token", user.jwt)
                dispatch(addUser(user.user))
            })
        }       
}

export const loginUser = (user) =>{
    return (dispatch) => {
        return fetch("http://localhost:3001/api/v1/login",{
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
        .then(res => res.json())
        .then(user => {
            console.log(user)
            localStorage.setItem("token", user.jwt)
            dispatch(addUser(user.user))
        })
    }
}

export const currentUser = (token) =>{
    console.log("inisde currentuser")
    return (dispatch) => {
        return fetch("http://localhost:3001/api/v1/current_user", {
            method: "GET",
            headers: {
              "content-type": "application/json",
              "accepts": "application/json",
              Authorization: `Bearer ${token}`
            }
          })
            .then(resp => resp.json())
            .then(user => {
                console.log("inside curetn user", user)
                dispatch(addUser(user.user))
            })
        }
        
       
    
}

