import SideBar from '../SideBar/SideBar';

import './App.css';

function App() {

  const lists = ['Покупки', 'Фронт', 'Учеба'];

  return (
    <div className="page__content">

      <SideBar lists={lists} />
    </div>
  );
}

export default App;
