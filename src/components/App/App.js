// импорты
import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from 'react-router-dom';

// импортируем контекст пользователя
import { CurrentUserContext } from '../../context/CurrentUserContext';

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

// импорт Api
import movieApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import userAuthApi from '../../utils/UserAuthApi';

// импорт стилей
import './App.css';

/////////////////////////////////////////////////////////////////////////

// главный компонент приложения /////////////////////////////////////////
function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // переменные состояния ///////////////////////////////////////////////

  // переменная состояния страницы Main
  const [isLoggenIn, setIsLoggenIn] = useState(false);

  //переменная состояния информации пользователя
  const [currentUser, setCurrentUser] = useState({});

  // переменная состояния массива всех полученных фильмов
  const [movies, setMovies] = useState([]);

  // переменная состояния сохранённых пользователем массива с фильмами
  const [savedMovies, setSavedMovies] = useState([]);

  // переменная состояния отфильтрованного пользователем массива с фильмами
  const [filteredMovies, setFilteredMovies] = useState([]);

  // переменная состояния клика меню на мобильных разрешении
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const [searchInputMovies, setSearchInputMovies] = useState('');

  const [searchInputSavedMovies, setSearchInputSavedMovies] = useState('');

  /////////////////////////////////////////////////////////////////////////

  // получаем данные пользователя при первом рендеринге если пользователь авторизовался
  useEffect(() => {
    if (isLoggenIn) {
      //запрос на получение данных пользователя
      mainApi
        .getUserInfo()

        .then((userData) => {
          setCurrentUser(userData);
        })

        .catch((error) => {
          console.log(
            `Ошибка при начальной загрузки информации пользователя с сервера: ${error}`
          );
        });
    }
  }, [isLoggenIn]);

  /////////////////////////////////////////////////////////////////////////

  // метод запроса к API для получения всех фильмов
  const handleGetAllMovies = async () => {
    return movieApi
      .getAllMovies()

      .then((allMovies) => {
        if (allMovies) {
          setMovies((prevMovies) => [...prevMovies, ...allMovies]);
          localStorage.setItem('movies', JSON.stringify(allMovies));
        }
      })
      .catch((error) => {
        console.log(`Ошибка при загрузки фильмов с сервера: ${error}`);
      });
  };

  /////////////////////////////////////////////////////////////////////////

  // метод обработки всех полученных фильмов фильтром пользователя
  const handleMovieSearch = async (filterText, shortMovieCheck) => {
    // проверяем был ли совершён уже поиск карточек и если, нет, то
    // обращаемся к api для загрузки всех фильмов
    if (movies.length === 0) {
      await handleGetAllMovies();
    }

    // сохраняем в локальное хранилище результат фильтрации
    localStorage.setItem(
      'filteredMovies',
      JSON.stringify(
        handleUserMovieSearch(
          JSON.parse(localStorage.getItem('movies')),
          filterText,
          shortMovieCheck
        )
      )
    );

    // достаём из локального хранилища сохранённые отфильтрованные фильмы
    // и передаём их переменной filteredMovies
    setFilteredMovies(JSON.parse(localStorage.getItem('filteredMovies')));
  };

  /////////////////////////////////////////////////////////////////////////
  // метод обработки всех сохранённых фильмов фильтром пользователя
  const handleSavedMovieSearch = (filterText, shortMovieCheck) => {
    // сохраняем в локальное хранилище результат фильтрации
    localStorage.setItem(
      'filteredSavedMovies',
      JSON.stringify(
        handleUserMovieSearch(savedMovies, filterText, shortMovieCheck)
      )
    );

    // достаём из локального хранилища сохранённые отфильтрованные фильмы
    // и передаём их переменной savedMovies
    setSavedMovies(JSON.parse(localStorage.getItem('filteredSavedMovies')));
  };
  /////////////////////////////////////////////////////////////////////////

  // метод фильтрования массива с фильмами по введённому пользователем тексту "filterText"
  const handleUserMovieSearch = (moviesList, filterText, shortMovieCheck) => {
    let resultList = moviesList.filter(
      (movie) =>
        // фильруем только по выборочным полям
        movie.nameRU.toLowerCase().includes(filterText) ||
        movie.nameEN.toLowerCase().includes(filterText) ||
        movie.director.toLowerCase().includes(filterText) ||
        movie.country.toLowerCase().includes(filterText) ||
        movie.description.toLowerCase().includes(filterText)
    );

    // если включен фильтр короткометражных фильмов, то дополнительно фильтруем
    // полученный ранее массив дополнительным фильтром
    if (shortMovieCheck) {
      return resultList.filter((movie) => movie.duration <= 40);
    } else {
      return resultList;
    }
  };

  /////////////////////////////////////////////////////////////////////////

  // метод обработки состояния клика меню на мобильном разрешении
  const handleOpenMenu = () => {
    setIsMenuClicked((open) => !open);
  };

  /////////////////////////////////////////////////////////////////////////

  // метод запроса к API для обработки сохранения фильма пользователем
  const handleMovieSave = (movie) => {
    mainApi
      .saveMovie(movie)

      .then(() => {
        console.log('movie save ok');
      })

      .catch((error) => {
        console.log(`Ошибка при сохранении фильма: ${error}`);
      });
  };

  /////////////////////////////////////////////////////////////////////////

  // метод запроса к API для обработки уделаения фильма пользователем
  const handleMovieDelete = (id) => {
    mainApi
      .deleteMovie(id)

      .then(() => {
        setSavedMovies((state) => state.filter((movie) => movie._id !== id));
      })

      .then(() => {
        console.log('movie delete ok');
      })

      .catch((error) => {
        console.log(`Ошибка при удалении фильма: ${error}`);
      });
  };

  /////////////////////////////////////////////////////////////////////////

  // метод запроса к API для обработки получения сохранённых фильмов пользователем
  const handleGetSavedMovie = () => {
    mainApi
      .getAllSavedMovies()

      .then((userSavedMovies) => {
        setSavedMovies(userSavedMovies);
        console.log('saved movies received ok');
      })

      .catch((error) => {
        console.log(`Ошибка при получении сохранённых фильмов: ${error}`);
      });
  };

  /////////////////////////////////////////////////////////////////////////

  // метод запроса к API для обновления информации пользователя
  function handleUserUpdate(userInfo) {
    mainApi
      .updateUserInfo(userInfo)

      .then((res) => {
        setCurrentUser(res);
        console.log('update ok');
      })

      .catch((error) => {
        console.log(`Ошибка при обновлении данных пользователя: ${error}`);
      });
  }

  /////////////////////////////////////////////////////////////////////////

  // метод запроса к API для регистрации пользоваетля на странице
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

  // метода запроса к API для авторизации пользоваетля на странице
  function handleUserSignIn({ password, email }) {
    userAuthApi
      .authorize({ password, email })
      .then((data) => {
        if (data._id) {
          localStorage.setItem('jwt', data._id);
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

  // метод запроса к API для выхода пользоваетля из системы
  const handleSignOut = () => {
    userAuthApi
      .logout()
      .then(() => {
        localStorage.removeItem('jwt');
        setIsLoggenIn(false);
        navigate('/');
        console.log('signout ok');
      })
      .catch((error) => {
        console.log(`Error with logout: ${error}`);
      });
  };

  /////////////////////////////////////////////////////////////////////////

  // метод проверки токенов авторизированных пользователей, вернувшихся в приложение
  function handleTokenCheck() {
    const token = localStorage.getItem('jwt');
    if (token) {
      userAuthApi
        .getContent()
        .then((res) => {
          if (res) {
            setIsLoggenIn(true);
            setCurrentUser(res);
            navigate(location.pathname, { replace: true });
            console.log('token check ok');
          }
        })
        .catch((error) => {
          console.log(`Error with token check: ${error}`);
        });
    }
  }

  /////////////////////////////////////////////////////////////////////////

  // вызываем метод проверки токенов при первичном рендеринге
  useEffect(() => {
    handleTokenCheck();
  }, []);

  // начало JSX ////////////////////////////////////////////////////////////
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
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
                  filteredMovies={filteredMovies}
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
                <SavedMovies
                  handleOpenMenu={handleOpenMenu}
                  handleGetSavedMovie={handleGetSavedMovie}
                  handleMovieDelete={handleMovieDelete}
                  handleSavedMovieSearch={handleSavedMovieSearch}
                  savedMovies={savedMovies}
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
                  handleOpenMenu={handleOpenMenu}
                  handleSignOut={handleSignOut}
                  handleUserUpdate={handleUserUpdate}
                ></Profile>
              </ProtectedRoute>
            }
          ></Route>

          {/* рут авторизации //////////////////////////////,////////////////////*/}
          <Route
            path="/signin"
            element={
              isLoggenIn ? (
                <Navigate to="/" replace />
              ) : (
                <Login handleUserSignIn={handleUserSignIn}></Login>
              )
            }
          ></Route>

          {/* рут регистрации //////////////////////////////,////////////////////*/}
          <Route
            path="/signup"
            element={
              isLoggenIn ? (
                <Navigate to="/" replace />
              ) : (
                <Register handleUserSignUp={handleUserSignUp}></Register>
              )
            }
          ></Route>

          {/* рут несуществующей страницы /////////////////////,////////////////////*/}
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>

        {/* попа с меню при нажатии на бургер-меню ///////////////////////////////*/}
        <MenuPopup
          isMenuClicked={isMenuClicked}
          handleOpenMenu={handleOpenMenu}
        ></MenuPopup>
      </CurrentUserContext.Provider>
    </div>
  );
}

// экспорт //////////////////////////////////////////////////////
export default App;
