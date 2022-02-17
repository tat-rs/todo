import React from "react";

import "./TodoList.css";

function TodoList(props) {

  return (
    <li className="item">
      <div className="item__color">

      </div>
      <p className="item__text">{props.list}</p>

      <button className="item__btn-delete">

      </button>
    </li>
  )
}

export default TodoList