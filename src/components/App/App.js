// импорты
import { useEffect, useState } from 'react';
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

import movieApi from '../../utils/MoviesApi';

// импорт стилей
import './App.css';

/////////////////////////////////////////////////////////////////////////

// главный компонент приложения
function App() {
  /////////////////////////////////////////////////////////////////////////

  // переменная состояния страницы Main
  const [isLoggenIn, setIsLoggenIn] = useState(true);

  // переменная состояния отфильтрованного пользователем массива с фильмами
  const [movies, setMovies] = useState([]);

  // переменная состояния клика меню на мобильных разрешении
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  /////////////////////////////////////////////////////////////////////////

  // useEffect(() => {
  //   // отправляем запрос только после того как пользователь успешно авторизировался
  //   if (isLoggenIn) {
  //     //   //запрос на получение карточек
  //     movieApi
  //       .getAllMovieCards()

  //       .then((movies) => {
  //         setMovies(movies);
  //       })

  //       .catch((error) => {
  //         console.log(
  //           `Ошибка при начальной загрузки фильмов с сервера: ${error}`
  //         );
  //       });

  //запрос на получение данных пользователя
  // api
  //   .getServerUserInfo()

  //   .then((userData) => {
  //     setCurrentUser(userData);
  //   })

  //   .catch((error) => {
  //     console.log(
  //       `Ошибка при начальной загрузки информации пользователя с сервера: ${error}`
  //     );
  //   });
  //   }
  // }, [isLoggenIn]);

  // метод запроса к фильмам на сервере и обработки их фильтром пользователя
  const handleMovieSearch = (filterText) => {
    movieApi
      .getAllMovieCards()

      .then((movies) => {
        setMovies(handleUserMovieSearch(movies, filterText));
      })

      .catch((error) => {
        console.log(
          `Ошибка при начальной загрузки фильмов с сервера: ${error}`
        );
      });
  };

  // метод фильтрования массива с фильмами по введённому пользователем тексту "filterText"
  const handleUserMovieSearch = (moviesList, filterText) => {
    return moviesList.filter(
      (obj) =>
        obj.nameRU.toLowerCase().includes(filterText) ||
        obj.nameEN.toLowerCase().includes(filterText) ||
        obj.director.toLowerCase().includes(filterText) ||
        obj.country.toLowerCase().includes(filterText) ||
        obj.description.toLowerCase().includes(filterText)
    );
  };

  // метод обработки состояния клика меню на мобильном разрешении
  const handleOpenMenu = () => {
    setIsMenuClicked((open) => !open);
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
                handleOpenMenu={handleOpenMenu}
                movies={movies}
                moviesListLength={movies.length}
                handleMovieSearch={handleMovieSearch}
              ></Movies>
            </ProtectedRoute>
          }
        ></Route>

        {/* рут с сохранёнными пользователем фильмами /////////////////////////*/}
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute isLoggenIn={isLoggenIn}>
              <SavedMovies handleOpenMenu={handleOpenMenu}></SavedMovies>
            </ProtectedRoute>
          }
        ></Route>

        {/* рут редактирования профиля//////////////////////////////,//////////*/}
        <Route
          path="/profile"
          element={
            <ProtectedRoute isLoggenIn={isLoggenIn}>
              <Profile handleOpenMenu={handleOpenMenu}></Profile>
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

        {/* рут несуществующей страницы /////////////////////,////////////////////*/}
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
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
