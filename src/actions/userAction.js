const addUser = (user) =>({type: "ADD_USER", payload: user})

export const createUser = (user) =>{
        return (dispatch) => {
            return fetch("http://localhost:3001/users",{
                method: "POST",
                headers: {
                    "content-type": "application/json"
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
                localStorage.setItem("token", user.user.id)
                dispatch(addUser(user.user))
            })
        } 
}