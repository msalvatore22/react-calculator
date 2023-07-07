import React from "react";

export const initialThemeState = {
  theme: "theme1",
  setTheme: () => null
};

const ThemeContext = React.createContext(initialThemeState);
export default ThemeContext;