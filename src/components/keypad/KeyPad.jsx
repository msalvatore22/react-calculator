import React from 'react'
import "./keyPad.scss"

const KeyPad = ({keys, onKeyPress}) => {

  return (
    <div className='keyPad'>
      {
        keys.map((key, idx) => (
          <button id={key.id} name={key.value} key={idx} onClick={e => onKeyPress(e.target.name)}>{key.value}</button>
        ))
      }
    </div>
  )
}

export default KeyPad