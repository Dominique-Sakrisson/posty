import React from 'react'
import PropTypes from 'prop-types'

const QueryBody = ({onChange}) =>  (
    <>
    <textarea onChange={onChange} placeholder='enter request body in raw json'></textarea>
    </>
)

QueryBody.propTypes ={
    onChange: PropTypes.func.isRequired,

}

export default QueryBody;
