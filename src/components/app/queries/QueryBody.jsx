import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../styles/style.css'
const QueryBody = ({onChange}) =>  (
    <>
    <textarea className={styles.reqBody} onChange={onChange} placeholder='enter request body in raw json'></textarea>
    </>
)

QueryBody.propTypes ={
    onChange: PropTypes.func.isRequired,

}

export default QueryBody;
