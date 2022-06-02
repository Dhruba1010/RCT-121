import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider