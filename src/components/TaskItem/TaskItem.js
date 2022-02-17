import React from "react";

import './TaskItem.css'

function TaskItem(props) {

  return (

    <li className="task__item">
    
      <input className="task__checkbox" id={`checkbox-${props.index}`} type='checkbox' name="checkbox"></input>
      <label htmlFor={`checkbox-${props.index}`} className="task__label"></label>
      <p className="task__text">{props.item}</p>

      <button className="task__delete"></button>
    </li>
  )
}

export default TaskItem