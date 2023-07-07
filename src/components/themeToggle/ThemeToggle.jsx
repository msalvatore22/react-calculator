import "./themeToggle.scss"
import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

const themeOptions = [{ value: "theme1" }, { value: "theme2" }, { "value": "theme3"}];

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className="toggle-box">
      <h3>calc</h3>
      <div>
        {
          themeOptions.map((option,idx) => (
            <button onClick={() => setTheme(option.value)}>
              {idx+1}
            </button>
          ))
        }
      </div>
      
    </div>

  )
}

export default ThemeToggle