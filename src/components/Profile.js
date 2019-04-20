import React from 'react';
import { connect } from 'react-redux'
import '../css/stylesheet/Profile.css'
import {emptyCart} from '../actions/cartAction'
import { Link, withRouter } from 'react-router-dom'
import { getUserHistory, deleteUser } from '../actions/userAction'

const Profile = (props) => {

    const logoutHandler = () => {
        localStorage.clear()
        props.emptyCart()
        props.emptyWishList()
        setTimeout(()=> props.history.push({pathname: '/'}), 600)
    }

    const deleteHandler= () => {
        const id=props.user.id
        const token=localStorage.token
        props.deleteUser(id, token).then(()=> props.history.push('/signup'))
        localStorage.clear()
    }

    const onClickHisHandler = ()=>{
        props.getUserHistory(props.user.id).then(()=> props.history.push(`/${props.user.id}/history`))
    }

    return (
        <div className="container">
            <div className="row profile">
                <div className="col-md-3">
                <div className="profile-sidebar">
                  
                    <div className="profile-userpic">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="img-responsive" alt="" />
                    </div>
                 
                    <div className="profile-usertitle">
                        <div className="profile-usertitle-name">
                            {props.user.user_name}
                        </div>
                        <div className="profile-usertitle-job">
                            {props.user.email}
                        </div>
                    </div>
                 
                    <div className="profile-userbuttons">
                        <button type="button" className="btn btn-success btn-sm">Edit</button>
                        <button onClick={deleteHandler} type="button" className="btn btn-danger btn-sm">Delete</button>
                    </div>
         
                    <div className="profile-usermenu">
                        <ul className="nav">
                            <li className="active">
                                <Link to='/welcome'><i className="fas fa-home"></i> Home </Link>
                            </li>
                            <li>
                                <Link to='' onClick={onClickHisHandler}><i className="fas fa-history"></i> History </Link>
                            </li>
                            <li>
                                <Link to={`/${props.user.id}/wishlist`}><i className="fas fa-heart"></i> Wish List </Link>
                            </li>
                            <li>
                                <Link to='' onClick={logoutHandler}><i className="fas fa-sign-out-alt"></i> LOGOUT </Link>
                            </li>
                        </ul>
                    </div>
                   
                </div>
            </div>
            <div className="col-md-9">
                <div className="profile-content">
                   Some user related content goes here...
                </div>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {user: state.userInfo.user }
}

export default withRouter(connect(mapStateToProps, { emptyCart, getUserHistory, deleteUser })(Profile));