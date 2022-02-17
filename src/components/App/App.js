import React from 'react';
import AddTodoPopup from '../AddTodoPopup/AddTodoPopup';
import SideBar from '../SideBar/SideBar';
import Task from '../Task/Task';

import { colors } from '../../utils/colors';

import './App.css';

function App() {

  const lists = ['Покупки', 'Фронт', 'Учеба'];

  const [isOpenedPopup, setIsOpenedPopup] = React.useState(false);

  function openPopup() {
    setIsOpenedPopup(true)
  }

  function closePopup() {
    setIsOpenedPopup(false)
  }

  return (
    <div className="page__content">

      <SideBar 
        lists={lists} 
        openPopup={openPopup}
    
        />

      <Task />

      <AddTodoPopup 
        colors={colors} 
        isOpenedPopup={isOpenedPopup}
        closePopup={closePopup}
        />
    </div>
  );
}

export default App;
