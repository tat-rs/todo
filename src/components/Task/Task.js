import React from "react"; 
import TaskItem from "../TaskItem/TaskItem";
import './Task.css';

import Button from "../Button/Button";

import AddIconBtn from "../../images/add-icon.svg";
import AddTaskPopup from "../AddTaskPopup/AddTaskPopup";

function Task(props) {

  return (
    <>

      <div className="task__title-container">

        <h2 className="task__title" style={{
          color: props.items.color
        }}>{props.items.title}</h2>

      </div>

      <ul className="task__list">

        {
          props.items && props.items.tasks.map((item, index) => (

            <TaskItem 
              item={item} 
              key={index} 
              index={index}
              removeTask={props.removeTask}
              onChangeCheckbox={props.onChangeCheckbox}/>
          ))
        }
      
      </ul>

      {
        props.isOpenedTaskPopup ?
        <AddTaskPopup 
          closePopup={props.closePopup}
          addTask={props.addTask}
          items={props.items}
        /> :

        <Button 
          src={`${AddIconBtn}`} 
          text="Новая задача" 
          onClick={props.openTaskPopup}
        />

      }
          
    </>
  )
}

export default Task