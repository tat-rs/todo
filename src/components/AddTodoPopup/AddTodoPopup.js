import React from "react";

import './AddTodoPopup.css'

function AddTodoPopup(props) {

  const [value, setValue] = React.useState('');
  const [selectedColor, setSelectedColor] = React.useState('');

  React.useEffect(() => {
    setValue('');
    setSelectedColor('');
  }, [props.isOpenedPopup]);

  function handleInputValue(evt) {
    setValue(evt.target.value)
  }

  function addTodo(evt) {
    evt.preventDefault();
    props.addTodo({
      "id": Math.random()*10,
      "title": value,
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
    <div className={`popup ${props.isOpenedPopup ? 'popup_opened' : '' }`} onMouseDown={props.closePopup}>
      <div className='popup__container' onMouseDown={(evt) => evt.stopPropagation()}>
        <button className='popup__close' type='button' aria-label='Закрыть форму' onClick={props.closePopup}></button>
        <form className='form popup__form' onSubmit={addTodo}>
        <h3 className="popup__title">Введите задачу</h3>
        <input className="form__item" type='text' name='name' placeholder='Название папки' value={value} onChange={handleInputValue}/>
        {<ul className="form__colors">
          {
            props.colors.map((color) => (
              <li key={color.id} onClick={() => handleColorClick(color.hex)}>
                <div className= {`form__item-color ${selectedColor === color.hex ? 'form__item-color_active' : ''}`}
                  style={{
                    backgroundColor: color.hex,
                  }}>

                </div>
              </li>
            ))
          }

        </ul>}
        <button className="popup__button">Добавить</button>
      </form>
      </div>
    </div>
  </>
  )
}

export default AddTodoPopup