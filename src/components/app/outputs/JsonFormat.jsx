import React from 'react'
import PropTypes from 'prop-types'

const JsonFormat = ({text}) => (
    <>
        <pre json='true' style={{overflowY: 'scroll', width: '80%', height: '500px'}}>
          {text}
        </pre>
    </>
)

JsonFormat.propTypes = {
    text: PropTypes.string.isRequired
}

export default JsonFormat;
