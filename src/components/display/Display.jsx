import React, { useContext } from 'react'
import "./display.scss"

const Display = ({result}) => {

  return (
   <div className='display'>
    {result}
   </div>
  )
}

export default Display