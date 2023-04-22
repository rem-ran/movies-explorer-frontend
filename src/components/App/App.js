// import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// импорт компонент
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';

// импорт стилей
import './App.css';
import { useState } from 'react';

function App() {
  // const navigate = useNavigate();

  //переменная состояния клика меню на мобильных разрешении
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  //метод обработки состояния клика меню на мобильном разрешении
  const handleOpenMenu = () => {
    setIsMenuClicked((open) => !open);
    console.log('click');
  };

  //проверка метода обработки авторизации пользоваетля на странице
  function handleUserSignIn({ password, email }) {
    console.log({ password, email });
  }

  //проверка метода  обработки регистрации пользоваетля на странице
  function handleUserSignUp({ name, password, email }) {
    console.log({ name, password, email });
  }

  // начало JSX ////////////////////////////////////////////////////////////
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route
          path="/movies"
          element={
            <Movies
              isMenuClicked={isMenuClicked}
              handleOpenMenu={handleOpenMenu}
            ></Movies>
          }
        ></Route>
        <Route
          path="/saved-movies"
          element={<SavedMovies></SavedMovies>}
        ></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route
          path="/signin"
          element={<Login handleUserSignIn={handleUserSignIn}></Login>}
        ></Route>
        <Route
          path="/signup"
          element={<Register handleUserSignUp={handleUserSignUp}></Register>}
        ></Route>
      </Routes>
    </div>
  );
}

// экспорт //////////////////////////////////////////////////////
export default App;
