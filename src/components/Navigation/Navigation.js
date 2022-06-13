import { useHistory, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import TodoList from "../TodoList/TodoList";
import AllTasksBtn from "../../images/icon-all-tasks.svg";

import "./Navigation.css";

function Navigation(props) {

  const history = useHistory();
  const location = useLocation();

  return (
    <div className={`task__navbar ${props.isMenuOpen ? 'task__navbar_opened' : '' }`}>
      <nav className="navbar">
        <ul className="navbar__list">
          <li>
            <Button
              /* src={`${AllTasksBtn}`} */
              text="Все задачи"
              className={`side-bar__button ${location.pathname === '/' ? 'side-bar__button_active' : ''}`}
              onClick={() => history.push('/')}/>
          </li>
          {
            props.lists?.map((list, index) => (
              <TodoList
                list={list}
                key={index}
                activeItem={props.activeItem}
                removeTodo={props.removeTodo}
                handleSelectedTodo={props.handleSelectedTodo}/>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default Navigation