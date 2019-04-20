import React from 'react';
import {connect} from 'react-redux'
import HistoryItem from './HistoryItem';
import { withRouter, Link } from 'react-router-dom'
import{ ListGroup } from 'react-bootstrap'

const OrderHistoryList = (props) => {

    const getUserHis = () => {
        const arrOfHistory = props.userHis.products.map((product, idx) => <ListGroup.Item><HistoryItem key={idx} productObj={product}/></ListGroup.Item>)
        return arrOfHistory;
    }    

        return (
            <div >
                {
                    props.userHis.products!==undefined ? 
                    <div className="order-history-list">
                        <Link to='/welcome'>Back to Home Page</Link>
                        <h1>{`${props.userHis.first_name} Order History: `}</h1>
                        <ListGroup>
                            {getUserHis()}
                        </ ListGroup>
                    </div>
                : props.history.push('/welcome')
                }
            </div>
        )
    }

const mapStateToProps = (state) => {
    return {userHis: state.userInfo.userHis}
}

export default withRouter(connect(mapStateToProps)(OrderHistoryList));