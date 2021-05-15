import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../../styles/style.css'

const HistoryItem = ({historyItem}) => (
    <li className={styles.historyItem}>
                <span> {historyItem.stamp}</span><br/>
                <span>Request method: {historyItem.method}</span><br/>
                <span>Request Url: {historyItem.url}</span><br/>
                {(historyItem.body ?
                <div>
                    <span>Request Body: {historyItem.body}</span> 
                </div>
                :
                <span className={styles.warning}>No request body included</span>
                )}   
        )
    </li>
)

HistoryItem.propTypes = {
    history1: PropTypes.array.isRequired,
   
}

export default HistoryItem;
