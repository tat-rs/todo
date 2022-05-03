import React from "react";
import Button from "../Button/Button";

import "./SideBar.css";

import AllTasksBtn from "../../images/icon-all-tasks.svg";
import AddIconBtn from "../../images/add-icon.svg";
import TodoList from "../TodoList/TodoList";
import { useHistory } from "react-router-dom";

function SideBar(props) {

  const history = useHistory();

  return (
    <section className="side-bar">
        <Button src={`${AllTasksBtn}`} text="Все задачи" className="side-bar__button" onClick={() => history.push('/')}/>

          <ul className="side-bar__list">

            {
              props.lists.map((list, index) => (
                <TodoList list={list} key={index} removeTodo={props.removeTodo} handleSelectedTodo={props.handleSelectedTodo}/>
              ))
            }

          </ul>

        <Button src={`${AddIconBtn}`} text="Добавить папку" className="side-bar__button" onClick={props.openPopup}/>

    </section>
  )
}

export default SideBar