import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onButtonClick}>{props.name}</button>
  )
}

export default Button;