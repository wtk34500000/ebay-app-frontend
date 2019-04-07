import React from 'react';
import {connect} from 'react-redux'
import HistoryItem from './HistoryItem'

const OrderHistoryList = (props) => {
        const arrOfHistory = props.user.products.map(product => <HistoryItem key={product.id} productObj={product}/>)
    
        return (
            <div className="order-history-list">
                {arrOfHistory}
            </div>
        )
    }


const mapStateToProps = (state) => {
    return {user: state.userInfo.user}
}

export default connect(mapStateToProps)(OrderHistoryList);