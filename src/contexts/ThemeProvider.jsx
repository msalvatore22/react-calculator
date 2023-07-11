import React, { useState, useEffect } from "react";
import ThemeContext, { initialThemeState } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const localStorage = window.localStorage;
  const savedThemeLocal = localStorage.getItem("theme");
  const savedThemeOptions = JSON.parse(localStorage.getItem("themeOptions"))
  const initialTheme = !!savedThemeLocal ? savedThemeLocal : initialThemeState.theme
  const initialThemeOptions = !!savedThemeOptions ? savedThemeOptions : initialThemeState.themeOptions

  const [theme, setTheme] = useState(initialTheme)
  const [themeOptions, setThemeOptions] = useState(initialThemeOptions)

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("themeOptions", JSON.stringify(themeOptions))
  }, [theme, themeOptions]);

  return (
    <ThemeContext.Provider value={{ theme, themeOptions, setTheme, setThemeOptions }}>
      <div className={`theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;