import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  return (
    <div></div>
    // <ThemeContext.Provider
    //   value={{
    //     theme,
    //     setTheme: () => setTheme(theme === )
    //}}
  );
}
export default ThemeContext;

/*
import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [mode, setTheme] = useState("light");
  return (
    <ThemeContext.Provider
      value={{
        mode,
        setTheme: () => setTheme(mode === "dark" ? "light" : "dark")
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
 */