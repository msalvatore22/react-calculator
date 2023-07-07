import { useState } from 'react'
import ThemeProvider from './contexts/ThemeProvider'
import Display from './components/display/Display'
import ThemeToggle from './components/themeToggle/ThemeToggle'


function App() {

  return (
    <ThemeProvider>
      <div>
        <ThemeToggle />
        <Display />
      </div>
    </ThemeProvider>
  )
}

export default App
