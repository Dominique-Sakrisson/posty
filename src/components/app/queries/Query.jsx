import React from 'react'
import PropTypes from 'prop-types'
import QueryMethod from './QueryMethod'
import QueryBody from './QueryBody'
import styles from '../../../styles/style.css'

const Query = ({onSubmit, onQueryChange, onMethodChange, onBodyChange}) => (
    <div className={styles.queryDiv}>
        <form onSubmit={onSubmit}>
            <h1>Posty</h1>
            <label  htmlFor='api-url'>Enter Request Url below</label><br/>
            <input id='api-url' style={{width:'40%', padding: '10px'}} onChange={onQueryChange} placeholder='Enter Api Url Here' name='request-sender' type="text" />
            <QueryBody onChange={onBodyChange}/>
            <QueryMethod onChange={onMethodChange}/>
            <button>Go!</button>
        </form>
    </div>
);

Query.propTypes = {
    // url: PropTypes.string.isRequired,
    // method: PropTypes.string.isRequired,
    onQueryChange: PropTypes.func.isRequired,
    onBodyChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Query;
