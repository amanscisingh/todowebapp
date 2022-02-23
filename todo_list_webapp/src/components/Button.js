import React from 'react'
import './css/Components.css'
const Button = ( { onClick, text, color} ) => {

  const btnStyle = {
    backgroundColor: color,
    color: 'white',
    border: 'none',
    height: '30px',
    width: '220px',
    borderRadius: '5px',
  }

  return (
    <button onClick={onClick} className='button' style={btnStyle}>
      {text}
    </button>
  )
}

export default Button