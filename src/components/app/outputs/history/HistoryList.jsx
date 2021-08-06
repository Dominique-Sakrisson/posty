import React from 'react'
import PropTypes from 'prop-types'
import HistoryItem from './HistoryItem'
import styles from '../../../../styles/style.css'

const HistoryList = ({history1}) => (
    <div className={styles.historyRender}>
        <p className={styles.historyLabel}>History</p>
    {(!history) ? 
        <p>'No recent history'</p>
        :
        <ul>
            {
                history1.map((historyItem) => (
                    <HistoryItem 
                        historyItem={historyItem} 
                    />
                ))
            }
        </ul>
        }
    </div>
)

HistoryList.propTypes = {
    history1: PropTypes.array.isRequired,
}

export default HistoryList;
