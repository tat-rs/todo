import React from "react";
import Button from "../Button/Button";

import "./SideBar.css";

import AllTasksBtn from "../../images/icon-all-tasks.svg";
import AddIconBtn from "../../images/add-icon.svg";
import TodoList from "../TodoList/TodoList";

function SideBar(props) {

  return (
    <section className="side-bar">

      <Button src={`${AllTasksBtn}`} text="Все задачи" className="side-bar__button"/>

      <nav className="side-bar__navigation">

        <ul className="side-bar__list">

          {
            props.lists.map((list, index) => (
              <TodoList list={list} key={index} removeTodo={props.removeTodo} handleSelectedTodo={props.handleSelectedTodo}/>
            ))
          }

        </ul>
      </nav>

      <Button src={`${AddIconBtn}`} text="Добавить папку" className="side-bar__button" openPopup={props.openPopup}/>

    </section>
  )
}

export default SideBar