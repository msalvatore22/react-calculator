import "./themeToggle.scss"
import React, { useContext, useState } from 'react'
import ThemeContext from '../../contexts/ThemeContext'


const ThemeToggle = () => {
  let themes = [{ value: "theme1", active: true }, { value: "theme2", active: false }, { value: "theme3", active: false}];
  const { theme, setTheme } = useContext(ThemeContext)
  const [themeOptions, setThemeOptions] = useState(themes)

  const handleClick = (idx, option) => {
    setTheme(option.value)

    let copy = themeOptions
    copy.forEach(op => {
      op.active = false
    })

    copy[idx]["active"] = true
    setThemeOptions(copy)
  }



  return (
    <div className="toggle-box">
      <h1>calc</h1>
      <p>theme</p>
      <div className='theme-toggle'>
        {
          themeOptions.map((option, idx) => (
            <button 
              className={option.active ? 'active' : null }
              key={idx}
              onClick={(e) => handleClick(idx, option)}
            >
            </button>
          ))
        }
      </div>
      
    </div>

  )
}

export default ThemeToggle