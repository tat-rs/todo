import React from "react"; 
import TaskItem from "../TaskItem/TaskItem";
import './Task.css';

function Task() {

  const items = ['123', '345', '678'];

  return (
    <section className="task">

      <div className="task__title-conteiner">

        <h2 className="task__title">Фронтенд</h2>

      </div>

      <ul className="task__list">

        {
          items.map((item, index) => (

            <TaskItem item={item} key={index} index={index}/>
          ))
        }
      
      </ul>
          
    </section>
  )
}

export default Task