import React from 'react'

const HistoryItem = (props) => {
    return (
        <div className="history-item">
            <p>{props.productObj.title}</p>
        </div>
    )
}

export default HistoryItem;