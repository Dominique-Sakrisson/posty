import React from 'react'
import PropTypes from 'prop-types'

const Query = ({onSubmit, onQueryChange}) => (
    <>
        <form onSubmit={onSubmit}>
            <h1>Posty</h1>
            <label htmlFor='api-url'>Enter Request Url below</label><br/>
            <input id='api-url' onChange={onQueryChange} placeholder='Enter Api Url Here' name='request-sender' type="text" />
            <button>Go!</button>
        </form>
    </>
);

Query.propTypes = {
    // url: PropTypes.string.isRequired,
    // method: PropTypes.string.isRequired,
    onQueryChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Query;
