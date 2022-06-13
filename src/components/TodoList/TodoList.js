import React from "react";

import "./TodoList.css";

function TodoList(props) {

  function removeTodo() {
    props.removeTodo(props.list)
  }

  function handleSelectedTodo() {
    props.handleSelectedTodo(props.list)
  }

  return (
    <li className={`item ${props.activeItem?.id === props.list.id ? 'item_active' : ''}`} onClick={handleSelectedTodo}>
      <div
        className="item__color"
        style={{
          backgroundColor: props.list.color,
          borderColor: props.list.color,
        }}>
      </div>

      <p className="item__text">{props.list.title}</p>

      <button className="item__btn-delete" onClick={removeTodo}>

      </button>
    </li>
  )
}

export default TodoList