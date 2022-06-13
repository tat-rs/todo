import React from "react";
import { useForm } from "../../hooks/useForm";

import "./AddTodoPopup.css";

function AddTodoPopup(props) {

  const [selectedColor, setSelectedColor] = React.useState("");
  const {values, errors, isValid, handleChange, resetForm} = useForm();

  React.useEffect(() => {
    setSelectedColor("");
    resetForm()
  }, [props.isOpenedPopup]);

  function addTodo(evt) {
    evt.preventDefault();
    props.addTodo({
      "id": `${Math.random() * 10}`,
      "title": values.titleOfList,
      "color": selectedColor,
      "tasks": []
    })

    props.closePopup();
  }

  function handleColorClick(color) {
    setSelectedColor(color);
  }

  return (
    <>
    <div className={`popup ${props.isOpenedPopup ? "popup_opened" : "" }`} onMouseDown={props.closePopup}>
      <div className="popup__container" onMouseDown={(evt) => evt.stopPropagation()}>
        <button className="popup__close" type="button" aria-label="Закрыть форму" onClick={props.closePopup}></button>
        <form className="form popup__form" onSubmit={addTodo} noValidate>
          <h3 className="popup__title">Введите задачу</h3>
          <input
            className="form__item"
            type="text"
            name="titleOfList"
            placeholder="Название папки"
            value={values.titleOfList || ''}
            onChange={handleChange}
            minLength="3"
            maxLength="20"
            required />
          <span className="error">{errors.titleOfList}</span>
          {<ul className="form__colors">
            {
              props.colors.map((color) => (
                <li key={color.id} onClick={() => handleColorClick(color.hex)}>
                  <div className= {`form__item-color ${selectedColor === color.hex ? "form__item-color_active" : ""}`}
                    style={{
                      backgroundColor: color.hex,
                    }}>

                  </div>
                </li>
              ))
            }

          </ul>}
          <button className="popup__button popup__button_green" disabled={!isValid}>Добавить</button>
      </form>
      </div>
    </div>
  </>
  )
}

export default AddTodoPopup