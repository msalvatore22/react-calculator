import "./themeToggle.scss"
import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../../contexts/ThemeContext'


const ThemeToggle = () => {
  const { theme, themeOptions, setTheme, setThemeOptions} = useContext(ThemeContext) 

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
      <div className="theme-box">
        <h6>THEME</h6>
        <div className="toggle">
          <div className="toggle-options">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
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
      </div>
    </div>

  )
}

export default ThemeToggle