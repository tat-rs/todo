import React from "react";
import { useForm } from "../../hooks/useForm";
import "./AddTaskPopup.css";

function AddTaskPopup(props) {
  console.log(props)

  const {values, errors, isValid, handleChange, resetForm} = useForm();

  function addTask(evt) {
    evt.preventDefault()
    props.addTask({
      "listId": props.items.id,
      "id": `${Math.random() * 10}`,
      "text": values.titleOfTask,
      "completed": false,
    })

    props.closePopup();
  }

  return (
    <form className='form popup__form task__form' onSubmit={addTask}>
      <span className="error">{errors.titleOfTask}</span>
      <input
        className="form__item"
        id={`task-${props.items.id}`}
        type='text'
        name='titleOfTask'
        placeholder='Текст задачи'
        value={values.titleOfTask || ''}
        minLength="3"
        required
        onChange={handleChange}/>

      <div className="popup__container-btn">
        <button className="popup__button popup__button_green" disabled={!isValid}>Добавить</button>
        <button className="popup__button" onClick={props.closePopup}>Отмена</button>
      </div>
    </form>
  )
}

export default AddTaskPopup