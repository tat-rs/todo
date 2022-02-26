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

  console.log(lists)

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

  function addTask(obj) {
    //obj - новый элемент списка конкретной тудушки
    const newLists = lists.map((item) => {
      if(item.id === obj.listId) {
        item.tasks = [...item.tasks, obj]
      }
      return item
    })
    setLists(newLists)
  }

  function removeTask(task) {
    //obj - новый элемент списка конкретной тудушки
    const newLists = lists.map((item) => {
      if(item.id === task.listId) {
        item.tasks = item.tasks.filter((item) => item.id !== task.id)
      }
      return item
    })
    setLists(newLists)
  }

  function removeTodo(todo) {

    const newLists = lists.filter(element => element.id !== todo.id)

    setLists(newLists)

  }

  function onChangeCheckbox(obj) {
    const newLists = lists.map((list) => {
      if(list.id === obj.listId) {
        list.tasks = list.tasks.map((task) => {
          if(task.id === obj.taskId) {
            task.complated = obj.complated
          }
          return task
        })
      }
      return list
    })

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
            addTask={addTask}
            removeTask={removeTask}
            onChangeCheckbox={onChangeCheckbox}
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
