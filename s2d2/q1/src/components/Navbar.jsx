import React, { useContext } from 'react';
import styles from './Theme.module.css';
import logo from '../logo.svg';
import { ThemeContext } from '../contexts/ThemeContextProvider';

function Navbar() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div className={styles.navbarM}>
        <div className={styles.navbar}>
            <img height="75px" src={logo} alt="Google" />
            <div className={styles.info}>
                <div><b>Contact</b></div>
                <div><b>Login</b></div>
                <div><b>Sign UP</b></div>
                <div><b>About</b></div>
                {theme === 'light' ? (<button  onClick={toggleTheme}>Dark</button>) : (<button onClick={toggleTheme}>Light</button>)}
            </div>
        </div>
    </div>
  )
}

export default Navbar