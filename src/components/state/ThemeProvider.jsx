import React, { createContext } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('default');

    const state = {theme, setTheme};

    return(
        <ThemeContext.Provider value={state}></ThemeContext.Provider>
    )
}


ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ThemeProvider;
