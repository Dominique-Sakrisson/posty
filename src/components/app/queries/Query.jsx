import React from 'react'
import PropTypes from 'prop-types'
import QueryMethod from './QueryMethod'

const Query = ({onSubmit, onQueryChange, onMethodChange}) => (
    <>
        <form onSubmit={onSubmit}>
            <h1>Posty</h1>
            <label  htmlFor='api-url'>Enter Request Url below</label><br/>
            <input id='api-url' style={{width:'40%', padding: '10px'}} onChange={onQueryChange} placeholder='Enter Api Url Here' name='request-sender' type="text" /><br/>
            <QueryMethod onChange={onMethodChange}/>
{/* 
            <label htmlFor='get-input'>GET</label>
            <input name='method-input' id='get-input' type="radio" />

            <label htmlFor='post-input'>POST</label>
            <input name='method-input' id='post-input' type="radio" />
            
            <label htmlFor='put-input'>PUT</label>
            <input name='method-input' id='put-input' type="radio" />
            
            <label htmlFor='delete-input'>DELETE</label>
            <input name='method-input' id='delete-input' type="radio" />
             */}
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
