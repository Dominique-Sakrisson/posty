import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../styles/style.css'

const JsonFormat = ({text}) => (
    <div className={styles.resCont}>
          <p className={styles.jsonLabel}>JSON Output</p>
        <pre aria-label='pretty-json' json='true' style={{}}>
          {text}
        </pre>
    </div>
)

JsonFormat.propTypes = {
    text: PropTypes.string.isRequired
}

export default JsonFormat;
