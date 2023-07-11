import React from "react";

export const initialThemeState = {
  theme: "theme1",
  themeOptions: [{ value: "theme1", active: true }, { value: "theme2", active: false }, { value: "theme3", active: false}]
};

const ThemeContext = React.createContext(initialThemeState);
export default ThemeContext;