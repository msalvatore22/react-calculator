import { useState } from 'react'
import ThemeProvider from './contexts/ThemeProvider'
import Display from './components/display/Display'
import ThemeToggle from './components/themeToggle/ThemeToggle'


function App() {

  return (
    <ThemeProvider>
      <div className='app'>
        <div className='calculator'>
          <ThemeToggle />
          <Display numbers={44} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
