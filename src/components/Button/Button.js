import React from "react";

import './Button.css'

function Button(props) {

  return (
    <button className={`button ${props.className}`} onClick={props.onClick}>

      <img className="button__icon" alt="Иконка" src={props.src}></img>

      <p className="button__text">{props.text}</p>

    </button>
  )
}

export default Button