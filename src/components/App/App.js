// import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// импорт компонент
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import MenuPopup from '../MenuPopup/MenuPopup';

// импорт стилей
import './App.css';
import { useState } from 'react';

function App() {
  // const navigate = useNavigate();

  //переменная состояния страницы Main
  const [isMainOpen, setIsMainOpen] = useState(false);

  const handleOpenMain = () => {
    setIsMainOpen(true);
  };

  //переменная состояния клика меню на мобильных разрешении
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  let bodyOverflow = document.querySelector('body');

  const toggleBodyOverflow = () => {
    if (bodyOverflow.style.overflow !== 'hidden') {
      bodyOverflow.style.overflow = 'hidden';
    } else {
      bodyOverflow.style.overflow = 'visible';
    }
  };

  //метод обработки состояния клика меню на мобильном разрешении
  const handleOpenMenu = () => {
    setIsMenuClicked((open) => !open);
    toggleBodyOverflow();
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
        <Route
          path="/"
          element={
            <Main
              isMainOpen={isMainOpen}
              handleOpenMain={handleOpenMain}
              setIsMainOpen={setIsMainOpen}
            ></Main>
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <Movies
              isMenuClicked={isMenuClicked}
              handleOpenMenu={handleOpenMenu}
              isMainOpen={isMainOpen}
              handleOpenMain={handleOpenMain}
            ></Movies>
          }
        ></Route>
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              isMenuClicked={isMenuClicked}
              handleOpenMenu={handleOpenMenu}
              isMainOpen={isMainOpen}
              handleOpenMain={handleOpenMain}
            ></SavedMovies>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <Profile
              isMenuClicked={isMenuClicked}
              handleOpenMenu={handleOpenMenu}
              isMainOpen={isMainOpen}
              handleOpenMain={handleOpenMain}
            ></Profile>
          }
        ></Route>
        <Route
          path="/signin"
          element={<Login handleUserSignIn={handleUserSignIn}></Login>}
        ></Route>
        <Route
          path="/signup"
          element={<Register handleUserSignUp={handleUserSignUp}></Register>}
        ></Route>
      </Routes>

      {/* попа с меню ///////////////////////////////////////////////////*/}
      <MenuPopup
        isMenuClicked={isMenuClicked}
        handleOpenMenu={handleOpenMenu}
      ></MenuPopup>
    </div>
  );
}

// экспорт //////////////////////////////////////////////////////
export default App;
