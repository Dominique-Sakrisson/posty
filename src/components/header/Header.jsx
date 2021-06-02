import React, {useContext} from 'react'
import {useModify, useTheme} from '../state/ThemeProvider';
import styles from '../../styles/style.css'

const Header = () => {
    const changeTheme = useModify();
    const theme = useTheme();

    const handleInputChange = (e) => {
        (e.target.checked ? changeTheme('dark'): changeTheme('default'));
    }
    return (
        
    <div className={theme === 'dark' ? styles.darkMode : styles.default}>
        <h1>Posty</h1>
        <label htmlFor='2' aria-label='bg-change'>Dark Mode?
            <input type='checkbox' onChange={handleInputChange}></input>
        </label>
    </div>
    );
}

export default Header;
