// импорты
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

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
import mainApi from '../../utils/MainApi';

// импорт стилей
import './App.css';
import userAuthApi from '../../utils/UserAuthApi';

/////////////////////////////////////////////////////////////////////////

// главный компонент приложения
function App() {
  const navigate = useNavigate();
  /////////////////////////////////////////////////////////////////////////

  // переменная состояния страницы Main
  const [isLoggenIn, setIsLoggenIn] = useState(false);

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

  /////////////////////////////////////////////////////////////////////////

  // метод обработки состояния клика меню на мобильном разрешении
  const handleOpenMenu = () => {
    setIsMenuClicked((open) => !open);
  };

  /////////////////////////////////////////////////////////////////////////

  // метод обработки сохранения фильма пользователем
  const handleMovieSave = (movie) => {
    mainApi
      .saveMovie(movie)

      .then(() => {
        console.log('all ok');
      })

      .catch((error) => {
        console.log(`Ошибка при сохранении фильма: ${error}`);
      });
  };

  /////////////////////////////////////////////////////////////////////////

  // проверка метода  обработки регистрации пользоваетля на странице
  function handleUserSignUp({ name, password, email }) {
    userAuthApi
      .register({ name, password, email })
      .then(() => {
        navigate('/signin', { replace: true });
        console.log('reg ok');
      })
      .catch((error) => {
        console.log(`Error with registration: ${error}`);
      });
  }

  /////////////////////////////////////////////////////////////////////////

  // проверка метода обработки авторизации пользоваетля на странице
  function handleUserSignIn({ password, email }) {
    userAuthApi
      .authorize({ password, email })
      .then((data) => {
        if (data._id) {
          localStorage.setItem('jwt', data._id);
          // setUserData({ email });
          setIsLoggenIn(true);
          navigate('/movies', { replace: true });
          console.log('login ok');
        }
      })

      .catch((error) => {
        console.log(`Error with login: ${error}`);
      });
  }

  /////////////////////////////////////////////////////////////////////////

  //метод выхода пользоваетля из системы
  const handleSignOut = () => {
    userAuthApi
      .logout()
      .then(() => {
        localStorage.removeItem('jwt');
        setIsLoggenIn(false);
        navigate('/signin');
        console.log('signout ok');
      })
      .catch((error) => {
        console.log(`Error with logout: ${error}`);
      });
  };

  /////////////////////////////////////////////////////////////////////////

  //метод проверки токенов авторизированных пользователей, вернувшихся в приложение
  function handleTokenCheck() {
    const token = localStorage.getItem('jwt');
    if (token) {
      userAuthApi
        .getContent()
        .then((res) => {
          if (res) {
            // const userData = {
            //   email: res.email,
            // };
            setIsLoggenIn(true);
            // setUserData(userData);
            navigate('/movies', { replace: true });
          }
        })
        .catch((error) => {
          console.log(`Error with token check: ${error}`);
        });
    }
  }

  /////////////////////////////////////////////////////////////////////////

  //вызываем метод проверки токенов при рендеринге главной страницы
  useEffect(() => {
    handleTokenCheck();
  }, []);

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
                handleMovieSave={handleMovieSave}
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
              <Profile
                handleOpenMenu={handleOpenMenu}
                handleSignOut={handleSignOut}
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
