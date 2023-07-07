import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

const themeOptions = [{ value: "theme1" }, { value: "theme2" }, { "value": "theme3"}];

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
      {themeOptions.map((option, idx) => (
        <option value={option.value} key={idx}>
          {option.value}
        </option>
      ))}
    </select>
  )
}

export default ThemeToggle