import { useState } from 'react'
import ThemeProvider from './contexts/ThemeProvider'
import Display from './components/display/Display'
import ThemeToggle from './components/themeToggle/ThemeToggle'
import KeyPad from './components/keypad/KeyPad'

function App() {
  const keys = [
    {id: 'seven', value: '7'},
    {id: 'eight', value: '8'},
    {id: 'nine', value: '9'},
    {id: 'del', value: 'DEL'},
    {id: 'four', value: '4'},
    {id: 'five', value: '5'},
    {id: 'six', value: '6'},
    {id: 'add', value: '+'},
    {id: 'one', value: '1'},
    {id: 'two', value: '2'},
    {id: 'three', value: '3'},
    {id: 'subtract', value: '-'},
    {id: 'decimal', value: '.'},
    {id: 'zero', value: '0'},
    {id: 'divide', value: '/'},
    {id: 'multiply', value: 'X'},
    {id: 'reset', value: 'RESET'},
    {id: 'equals', value: '='},
  ]

  const [currentNumber, setCurrentNumber] = useState('0')
  const [evaluated, setEvaluated] = useState(false)
  const [operatorFlag, setOperatorFlag] = useState(false)
  const [decimalFlag, setDecimalFlag] = useState(false)
  
  const handleKeyPress = (key) => {
    let num = currentNumber
    let ev = evaluated
    let opf = operatorFlag
    let decf = decimalFlag

    switch(true){
      case key === '0' ||
           key === '1' ||
           key === '2' ||
           key === '3' ||
           key === '4' ||
           key === '5' ||
           key === '6' ||
           key === '7' ||
           key === '8' ||
           key === '9' :
        if(currentNumber !== '0' && ev === false){
          num += key
          opf = false
        } else if (ev === true) {
          ev = false
          num = key
        } else {
          num = key
        }
      break
      case key === '+' ||
           key === '-' ||
           key === '/' ||
           key === '*' :
        if(!operatorFlag){
          num += key
          opf = true
          decf = false
          ev = false
        } else {
          const newNumber = num.slice(0, num.length - 1)
          num = newNumber + key
        }
      break
      case key === 'RESET' :
        num = '0'
        opf = false
        decf = false
        ev = false
      case key === 'DEL' :
        if(num.length === 1){
          num = '0'
        } else {
          console.log(num)
          num = num.slice(0, -1)
        }
        opf = false
        decf = false
        ev = false
      break
      case key === '=' :
        num = eval(num).toString()
        opf = false
        ev = true
      break 
      case key === '.' :
        if(!decimalFlag && evaluated === false){
          num += '.'
          decf = true
          ev = false
        }
    }
    setCurrentNumber(num)
    setDecimalFlag(decf)
    setOperatorFlag(opf)
    setEvaluated(ev)
  }

  return (
    <ThemeProvider>
      <div className='app'>
        <div className='calculator'>
          <ThemeToggle />
          <Display result={currentNumber} />
          <KeyPad keys={keys} onKeyPress={handleKeyPress} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
