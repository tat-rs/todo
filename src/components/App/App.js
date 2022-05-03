import AddTodoPopup from '../AddTodoPopup/AddTodoPopup';
import SideBar from '../SideBar/SideBar';
import Task from '../Task/Task';

import { colors } from '../../utils/colors';

import './App.css';
import { useEffect, useState } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';

function App() {

  const [ lists, setLists ] = useState (
    JSON.parse(localStorage.getItem('lists')) || []
  );

  const [isOpenedPopup, setIsOpenedPopup] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isOpenedTaskPopup, setIsOpenedTaskPopup] = useState(false);

  const [activeItem, setActiveItem] = useState(null);

  const location = useLocation();
  const history = useHistory();

  function handleSelectedTodo(todo) {
    history.push(`/lists/${todo.id}`)
  }

  useEffect(() => {

    localStorage.setItem('lists', JSON.stringify(lists));

    const listId = Number(location.pathname.split(`lists/`)[1])

    if(lists) {
      const list = lists.find(item => Number(item.id) === listId);
      console.log(lists)
      setActiveItem(list)
    }

    console.log(listId)

  }, [lists, location.pathname]);

  function openPopup() {
    setIsOpenedPopup(true)
  }

  function openTaskPopup() {
    setIsOpenedTaskPopup(true)
  }

  function handleMenu() {
    setIsMenuOpen(true)
  }

  function closePopup() {
    setIsOpenedPopup(false)
    setIsOpenedTaskPopup(false)
    setIsMenuOpen(false)
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
        isMenuOpen={isMenuOpen}
        handleMenu={handleMenu}
        />

        <section className="task">

        <Switch>
          <Route exact path='/'>

            <ul className='all-task'>

              {lists.map((item) => (

                <li key={item.id}>
                  <Task
                    items={item}
                    isOpenedTaskPopup={isOpenedTaskPopup}
                    openTaskPopup={openTaskPopup}
                    closePopup={closePopup}
                    addTask={addTask}
                    removeTask={removeTask}
                    onChangeCheckbox={onChangeCheckbox}/>
                </li>

              ))}
            </ul>

          {
            lists.length === 0 && (<div>НЕТ ЗАДАЧ</div>)
          }

          </Route>

          <Route path='/lists/:id'>
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
          </Route>

        </Switch>

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
