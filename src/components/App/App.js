import React from 'react';
import AddTodoPopup from '../AddTodoPopup/AddTodoPopup';
import SideBar from '../SideBar/SideBar';
import Task from '../Task/Task';

import { colors } from '../../utils/colors';

import './App.css';

function App() {

  const [ lists, setLists ] = React.useState(
    JSON.parse(localStorage.getItem('lists')) || []
  );

  const [isOpenedPopup, setIsOpenedPopup] = React.useState(false);

  const [isOpenedTaskPopup, setIsOpenedTaskPopup] = React.useState(false);

  const [activeItem, setActiveItem] = React.useState(null);

  function handleSelectedTodo(todo) {
    setActiveItem(todo)
  }

  React.useEffect(() => {

    localStorage.setItem('lists', JSON.stringify(lists));

  }, [lists]);

  function openPopup() {
    setIsOpenedPopup(true)
  }

  function openTaskPopup() {
    setIsOpenedTaskPopup(true)
  }

  function closePopup() {
    setIsOpenedPopup(false)
    setIsOpenedTaskPopup(false)
  }

  function addTodo(item) {
    setLists([...lists, item])
  }

  function removeTodo(todo) {

    const newLists = lists.filter(element => element.id !== todo.id)

    setLists(newLists)

  }

  return (
    <div className="page__content">

      <SideBar 
        lists={lists} 
        openPopup={openPopup}
        removeTodo={removeTodo}
        handleSelectedTodo={handleSelectedTodo}
        />

        <section className="task">
        {
          lists && activeItem && 
          
          <Task 
            items={activeItem}
            isOpenedTaskPopup={isOpenedTaskPopup}
            openTaskPopup={openTaskPopup}
            closePopup={closePopup}
          
          />
        }
        </section>

      <AddTodoPopup 
        colors={colors} 
        isOpenedPopup={isOpenedPopup}
        closePopup={closePopup}
        addTodo={addTodo}
        />
    </div>
  );
}

export default App;
