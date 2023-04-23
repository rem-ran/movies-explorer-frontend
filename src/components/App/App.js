// импорты
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// импорт компонент
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import MenuPopup from '../MenuPopup/MenuPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PageNotFound from '../PageNotFound/PageNotFound';

// импорт констатнт
import { bodyOverflow } from '../../utils/constants';

// импорт стилей
import './App.css';

/////////////////////////////////////////////////////////////////////////

// главный компонент приложения
function App() {
  /////////////////////////////////////////////////////////////////////////

  // переменная состояния страницы Main
  const [isLoggenIn, setIsLoggenIn] = useState(true);

  // переменная состояния клика меню на мобильных разрешении
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  /////////////////////////////////////////////////////////////////////////

  // метод блокировки прокрутки экрана при открытии меню
  const toggleBodyOverflow = () => {
    if (bodyOverflow.style.overflow !== 'hidden') {
      bodyOverflow.style.overflow = 'hidden';
    } else {
      bodyOverflow.style.overflow = 'visible';
    }
  };

  // метод обработки состояния клика меню на мобильном разрешении
  const handleOpenMenu = () => {
    setIsMenuClicked((open) => !open);
    toggleBodyOverflow();
  };

  // проверка метода обработки авторизации пользоваетля на странице
  function handleUserSignIn({ password, email }) {
    console.log({ password, email });
  }

  // проверка метода  обработки регистрации пользоваетля на странице
  function handleUserSignUp({ name, password, email }) {
    console.log({ name, password, email });
  }

  // начало JSX ////////////////////////////////////////////////////////////
  return (
    <div className="page">
      <Routes>
        {/* рут с информацией об авторе и проекте ///////////////////////////*/}
        <Route
          path="/"
          element={
            <Main
              isLoggenIn={isLoggenIn}
              isMenuClicked={isMenuClicked}
              handleOpenMenu={handleOpenMenu}
            ></Main>
          }
        ></Route>

        {/* рут со всеми фильмами ///////////////////////////////////////////*/}
        <Route
          path="/movies"
          element={
            <ProtectedRoute isLoggenIn={isLoggenIn}>
              <Movies
                isMenuClicked={isMenuClicked}
                handleOpenMenu={handleOpenMenu}
              ></Movies>
            </ProtectedRoute>
          }
        ></Route>

        {/* рут с сохранёнными пользователем фильмами /////////////////////////*/}
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute isLoggenIn={isLoggenIn}>
              <SavedMovies
                isMenuClicked={isMenuClicked}
                handleOpenMenu={handleOpenMenu}
              ></SavedMovies>
            </ProtectedRoute>
          }
        ></Route>

        {/* рут редактирования профиля//////////////////////////////,//////////*/}
        <Route
          path="/profile"
          element={
            <ProtectedRoute isLoggenIn={isLoggenIn}>
              <Profile
                isMenuClicked={isMenuClicked}
                handleOpenMenu={handleOpenMenu}
              ></Profile>
            </ProtectedRoute>
          }
        ></Route>

        {/* рут авторизации //////////////////////////////,////////////////////*/}
        <Route
          path="/signin"
          element={<Login handleUserSignIn={handleUserSignIn}></Login>}
        ></Route>

        {/* рут регистрации //////////////////////////////,////////////////////*/}
        <Route
          path="/signup"
          element={<Register handleUserSignUp={handleUserSignUp}></Register>}
        ></Route>

        <Route
          path="/not-found"
          element={<PageNotFound></PageNotFound>}
        ></Route>
      </Routes>

      {/* попа с меню при нажатии на бургер-меню ///////////////////////////////*/}
      <MenuPopup
        isMenuClicked={isMenuClicked}
        handleOpenMenu={handleOpenMenu}
      ></MenuPopup>
    </div>
  );
}

// экспорт //////////////////////////////////////////////////////
export default App;
