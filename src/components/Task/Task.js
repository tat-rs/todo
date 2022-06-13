import React, { useEffect, useState } from "react"; 
import TaskItem from "../TaskItem/TaskItem";
import './Task.css';

import Button from "../Button/Button";

import AddIconBtn from "../../images/add-icon.svg";
import AddTaskPopup from "../AddTaskPopup/AddTaskPopup";

function Task(props) {

  const [isOpenedTaskPopup, setIsOpenedTaskPopup] = useState(false);

  useEffect(() => {
    setIsOpenedTaskPopup(false)
  }, [props.items])

  function handleChangeVisibleBtn() {
    setIsOpenedTaskPopup(!isOpenedTaskPopup)
  }

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
        isOpenedTaskPopup ?
        <AddTaskPopup 
          closePopup={handleChangeVisibleBtn}
          addTask={props.addTask}
          items={props.items}
        /> :

        <Button 
          src={`${AddIconBtn}`} 
          text="Новая задача" 
          onClick={handleChangeVisibleBtn}
        />

      }
          
    </>
  )
}

export default Task