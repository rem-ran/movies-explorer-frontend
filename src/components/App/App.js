// импорты
import { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';

// импортируем контекст пользователя
import { CurrentUserContext } from '../../context/CurrentUserContext';

// импорт компонент
import Main from '../Main/Main';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import InfoPopup from '../InfoPopup/InfoPopup';
import MenuPopup from '../MenuPopup/MenuPopup';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// импорт Api
import mainApi from '../../utils/MainApi';
import movieApi from '../../utils/MoviesApi';
import userAuthApi from '../../utils/UserAuthApi';

import { serverErrorMsg } from '../../utils/constants';

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

  // переменная состояния загрузки
  const [isLoading, setIsLoading] = useState(false);

  //переменная состояния попапа с сообщением
  const [infoPopupStatus, setInfoPopupStatus] = useState(false);

  //переменная состояния текста сообщения в информационном модальном окне
  const [infoPopupMsg, setInfoPopupMsg] = useState('');

  /////////////////////////////////////////////////////////////////////////

  // метод обработки состояния клика меню на мобильном разрешении
  const handleOpenMenu = () => {
    setIsMenuClicked((open) => !open);
  };

  /////////////////////////////////////////////////////////////////////////

  // метод обработки состояния клика меню на мобильном разрешении
  const handleInfoModalMsg = (msg) => {
    setInfoPopupMsg(msg);
  };

  /////////////////////////////////////////////////////////////////////////

  // метод обработки закрытия информационного попапа
  const handleCloseInfoPopup = () => {
    setInfoPopupStatus(false);
  };

  /////////////////////////////////////////////////////////////////////////

  // метод обработки открытия информационного попапа
  const handleOpenInfoPopup = (msg) => {
    setInfoPopupMsg(msg);
    setInfoPopupStatus(true);
  };

  /////////////////////////////////////////////////////////////////////////

  // метод получения получения данных пользователя с сервера
  const handleGetUserInfo = () => {
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
  };

  /////////////////////////////////////////////////////////////////////////

  // метод запроса к API для получения всех фильмов
  const handleGetAllMovies = async () => {
    setIsLoading(true);
    return movieApi
      .getAllMovies()

      .then((allMovies) => {
        if (allMovies) {
          setMovies((prevMovies) => [...prevMovies, ...allMovies]);
          localStorage.setItem(
            `${currentUser._id}-movies`,
            JSON.stringify(allMovies)
          );
        }
      })
      .catch((error) => {
        handleOpenInfoPopup(serverErrorMsg);
        console.log(`Ошибка при загрузки фильмов с сервера: ${error}`);
      })
      .finally(() => setIsLoading(false));
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
      `${currentUser._id}-filteredMovies`,
      JSON.stringify(
        handleUserMovieSearch(
          JSON.parse(localStorage.getItem(`${currentUser._id}-movies`)),
          filterText,
          shortMovieCheck
        )
      )
    );

    // достаём из локального хранилища сохранённые отфильтрованные фильмы
    // и передаём их переменной filteredMovies
    setFilteredMovies(
      JSON.parse(localStorage.getItem(`${currentUser._id}-filteredMovies`))
    );
  };

  /////////////////////////////////////////////////////////////////////////
  // метод обработки всех сохранённых фильмов фильтром пользователя
  const handleSavedMovieSearch = (filterText, shortMovieCheck) => {
    // сохраняем в локальное хранилище результат фильтрации
    localStorage.setItem(
      `${currentUser._id}-filteredSavedMovies`,
      JSON.stringify(
        handleUserMovieSearch(
          // JSON.parse(localStorage.getItem(`${currentUser._id}-saved-movies`)),
          savedMovies,
          filterText,
          shortMovieCheck
        )
      )
    );

    // достаём из локального хранилища сохранённые отфильтрованные фильмы
    // и передаём их переменной savedMovies
    setSavedMovies(
      JSON.parse(localStorage.getItem(`${currentUser._id}-filteredSavedMovies`))
    );
  };
  /////////////////////////////////////////////////////////////////////////

  // метод фильтрования массива с фильмами по введённому пользователем тексту "filterText"
  const handleUserMovieSearch = (moviesList, filterText, shortMovieCheck) => {
    let resultList = moviesList
      .filter(
        (movie) =>
          // фильруем только по выборочным полям
          movie.nameRU.toLowerCase().includes(filterText) ||
          movie.nameEN.toLowerCase().includes(filterText) ||
          movie.director.toLowerCase().includes(filterText) ||
          movie.country.toLowerCase().includes(filterText) ||
          movie.description.toLowerCase().includes(filterText)
      )
      .filter((movie) => (shortMovieCheck ? movie.duration <= 40 : movie));

    if (resultList.length === 0) {
      handleOpenInfoPopup('ничего не найдено');
    }

    return resultList;
  };

  /////////////////////////////////////////////////////////////////////////

  // метод запроса к API для обработки сохранения фильма пользователем
  const handleMovieSave = (movie) => {
    // сохраняем фильм только если такого фильма уже нет в списке сохранённых
    const alreadySaveMovie = savedMovies.find(
      (m) => m.movieId === movie.movieId
    );
    console.log(alreadySaveMovie);
    if (!alreadySaveMovie) {
      mainApi
        .saveMovie(movie)

        .then((newSavedMovie) => {
          setSavedMovies([newSavedMovie, ...savedMovies]);
        })

        .then(() => {
          console.log('movie save ok');
        })

        .catch((error) => {
          console.log(`Ошибка при сохранении фильма: ${error}`);
        });
    }
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
        setSavedMovies(userSavedMovies.reverse());
        localStorage.setItem(
          `${currentUser._id}-saved-movies`,
          JSON.stringify(userSavedMovies)
        );
        console.log('saved movies received ok');
      })

      .catch((error) => {
        console.log(`Ошибка при получении сохранённых фильмов: ${error}`);
      });
  };

  /////////////////////////////////////////////////////////////////////////

  // метод запроса к API для обновления информации пользователя
  const handleUserUpdate = (userInfo) => {
    mainApi
      .updateUserInfo(userInfo)

      .then((res) => {
        setCurrentUser(res);
        handleOpenInfoPopup('Вы успешно обновили свои данные!');
        console.log('update ok');
      })

      .catch((error) => {
        handleOpenInfoPopup(serverErrorMsg);
        console.log(`Ошибка при обновлении данных пользователя: ${error}`);
      });
  };

  /////////////////////////////////////////////////////////////////////////

  // метод запроса к API для регистрации пользоваетля на странице
  const handleUserSignUp = ({ name, password, email }) => {
    userAuthApi
      .register({ name, password, email })
      .then(() => {
        handleUserSignIn({ password, email });
        console.log('reg ok');
      })
      .catch((error) => {
        console.log(`Error with registration: ${error}`);
      });
  };

  /////////////////////////////////////////////////////////////////////////

  // метода запроса к API для авторизации пользоваетля на странице
  const handleUserSignIn = ({ password, email }) => {
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
  };

  /////////////////////////////////////////////////////////////////////////

  // метод запроса к API для выхода пользоваетля из системы
  const handleSignOut = () => {
    userAuthApi
      .logout()
      .then(() => {
        localStorage.removeItem('jwt');
        localStorage.clear();
        setCurrentUser({});
        setMovies([]);
        setFilteredMovies([]);
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
  const handleTokenCheck = () => {
    const token = localStorage.getItem('jwt');
    if (token) {
      userAuthApi
        .getContent()
        .then((res) => {
          if (res) {
            setIsLoggenIn(true);
            setCurrentUser(res);
            navigate(location.pathname, { replace: true });
            // console.log('token check ok');
          } else {
            setIsLoggenIn(false);
          }
        })
        .catch((error) => {
          console.log(`Error with token check: ${error}`);
        });
    }
  };

  /////////////////////////////////////////////////////////////////////////

  // получаем данные пользователя и загружаем сохранённые пользователем фильмы
  // при рендеринге если авторизовался
  useEffect(() => {
    if (isLoggenIn) {
      handleGetUserInfo();

      handleGetSavedMovie();
    }
  }, [isLoggenIn]);

  /////////////////////////////////////////////////////////////////////////

  // вызываем метод проверки токенов рендеринге приложения
  useEffect(() => {
    handleTokenCheck();
  }, []);

  /////////////////////////////////////////////////////////////////////////

  // рендерим filteredMovies в зависимости от изменения данных currentUser
  useEffect(() => {
    const filtMov = JSON.parse(
      localStorage.getItem(`${currentUser._id}-filteredMovies`)
    );
    if (filtMov) {
      setFilteredMovies(filtMov);
    }

    // const filtSavedMov = JSON.parse(
    //   localStorage.getItem(`${currentUser._id}-filteredSavedMovies`)
    // );
    // if (filtSavedMov) {
    //   setSavedMovies(filtSavedMov);
    // }
  }, [currentUser]);

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
                  handleMovieSearch={handleMovieSearch}
                  handleMovieSave={handleMovieSave}
                  handleMovieDelete={handleMovieDelete}
                  savedMovies={savedMovies}
                  isLoading={isLoading}
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

        {/* попап с меню при нажатии на бургер-меню ///////////////////////////////*/}
        <MenuPopup
          isMenuClicked={isMenuClicked}
          handleOpenMenu={handleOpenMenu}
        ></MenuPopup>

        {/* попап с сообщением /////////////////////////////////////////////////////*/}
        <InfoPopup
          setInfoPopupStatus={infoPopupStatus}
          onClose={handleCloseInfoPopup}
          infoPopupMsg={infoPopupMsg}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

// экспорт //////////////////////////////////////////////////////
export default App;
