import React from 'react'
import PropTypes from 'prop-types'

const QueryMethod = ({onChange}) => (
    <>
    <label htmlFor='get-input'>GET</label>
            <input onChange={onChange} name='method-input' id='get-input' type="radio" value='GET'/>

            <label htmlFor='post-input'>POST</label>
            <input onChange={onChange} name='method-input' id='post-input' type="radio" value='POST'/>
            
            <label htmlFor='put-input'>PUT</label>
            <input onChange={onChange} name='method-input' id='put-input' type="radio" value='PUT'/>
            
            <label htmlFor='delete-input'>DELETE</label>
            <input onChange={onChange} name='method-input' id='delete-input' type="radio" value='DELETE' />
    </>
)

QueryMethod.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default QueryMethod;
