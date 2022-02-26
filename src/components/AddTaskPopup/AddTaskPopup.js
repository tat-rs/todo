import React from "react";
import "./AddTaskPopup.css";

function AddTaskPopup(props) {

  const [value, setValue] = React.useState('');

  function handleInputValue(evt) {
    setValue(evt.target.value)
  }

  function addTask() {

  }

  return (
    <form className='form popup__form' onSubmit={addTask}>
      <input className="form__item" type='text' name='name' placeholder='Текст задачи' value={value} onChange={handleInputValue}/>

      <div className="popup__container-btn">
        <button className="popup__button popup__button_green">Добавить</button>
        <button className="popup__button" onClick={props.closePopup}>Отмена</button>
      </div>
    </form>
  )
}

export default AddTaskPopup