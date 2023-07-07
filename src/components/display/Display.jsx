import React from 'react'
import "./display.scss"

const Display = (props) => {
  const {numbers} = props
  return (
   <div className='display'>
    {numbers}
   </div>
  )
}

export default Display