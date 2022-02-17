import React from "react";

import './AddTodoPopup.css'

function AddTodoPopup(props) {

  function handleInputValue() {

  }

  function handleInputChange() {

  }

  function handleColorClick() {

  }

  return (
    <>
    <div className={`popup ${props.isOpenedPopup ? 'popup_opened' : '' }`} onMouseDown ={props.closePopup}>
      <div className='popup__container' onMouseDown ={(evt) => evt.stopPropagation()}>
        <button className='popup__close' type='button' aria-label='Закрыть форму' onClick={props.closePopup}></button>
        <form className='form popup__form' onSubmit={handleInputChange}>
        <h3 className="popup__title">Введите задачу</h3>
        <input className="form__item" type='text' name='name' placeholder='Название папки' /* value={value} onChange={handleInputValue} *//>
        {<ul className="form__colors">
          {
            props.colors.map((color) => (
              <li key={color.id} onClick={() => handleColorClick(color.id)}>
                <div className= {`form__item-color`}
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