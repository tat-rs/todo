import React from "react"; 
import TaskItem from "../TaskItem/TaskItem";
import './Task.css';

import Button from "../Button/Button";

import AddIconBtn from "../../images/add-icon.svg";

function Task(props) {

  return (
    <>

      <div className="task__title-conteiner">

        <h2 className="task__title" style={{
          color: props.items.color
        }}>{props.items.title}</h2>

      </div>

      <ul className="task__list">

        {
          props.items && props.items.tasks.map((item, index) => (

            <TaskItem item={item} key={index} index={index}/>
          ))
        }
      
      </ul>

      <Button src={`${AddIconBtn}`} text="Новая задача" openPopup={props.openPopup}/>
          
    </>
  )
}

export default Task