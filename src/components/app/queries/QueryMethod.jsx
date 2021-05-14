import React from 'react'
import PropTypes from 'prop-types'
import '../../../styles/style.css'

const QueryMethod = ({onChange}) => (
    <>
        <label htmlFor='get-input'>GET
            <input  onChange={onChange} name='method-input' id='get-input' type="radio" value='GET'/>
        </label>
    
        <label htmlFor='post-input'>POST
            <input  onChange={onChange} name='method-input' id='post-input' type="radio" value='POST'/>
        </label>
    
        <label htmlFor='put-input'>PUT
            <input  onChange={onChange} name='method-input' id='put-input' type="radio"  value='PUT'/>
        </label>
        
        <label htmlFor='delete-input'>DELETE
            <input  onChange={onChange} name='method-input' id='delete-input'    type="radio" value='DELETE' />
        </label>
    </> 
)

QueryMethod.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default QueryMethod;
