import React from "react";

import './TaskItem.css'

function TaskItem(props) {

  function handleChecked(evt) {

    const data = {
      listId: props.item.listId,
      taskId: props.item.id,
      complated: evt.target.checked
    }

    props.onChangeCheckbox(data)
  }

  function removeTask() {
    props.removeTask(props.item)
  }

  return (
    <>
      <li className="task__item">
      
        <input className="task__checkbox" id={`checkbox-${props.index}`} type='checkbox' name="checkbox" onChange={handleChecked} checked={props.item.complated || false}></input>
        <label htmlFor={`checkbox-${props.index}`} className="task__label"></label>
        <p className="task__text">{props.item.text}</p>

        <button className="task__delete" onClick={removeTask}></button>
    </li>

    </>
  )
}

export default TaskItem