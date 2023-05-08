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

// импорт констант
import {
  serverErrorMsg,
  userUpdateOkMsg,
  nothingFoundMsg,
} from '../../utils/constants';

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

  // метод фильтрования массива с фильмами по введённому пользователем тексту "filterText"
  const handleUserMovieFilter = (moviesList, filterText, shortMovieCheck) => {
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
      handleOpenInfoPopup(nothingFoundMsg);
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
        handleOpenInfoPopup(userUpdateOkMsg);
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
      })
      .catch((error) => {
        console.log(`Ошибка регистрации: ${error}`);
      });
  };

  /////////////////////////////////////////////////////////////////////////

  // метода запроса к API для авторизации пользоваетля на странице
  const handleUserSignIn = ({ password, email }) => {
    userAuthApi
      .authorize({ password, email })
      .then((data) => {
        if (data._id) {
          localStorage.setItem('token', data._id);
          setIsLoggenIn(true);
          navigate('/movies', { replace: true });
        }
      })

      .catch((error) => {
        console.log(`Ошибка авторизации: ${error}`);
      });
  };

  /////////////////////////////////////////////////////////////////////////

  // метод запроса к API для выхода пользоваетля из системы
  const handleSignOut = () => {
    userAuthApi
      .logout()
      .then(() => {
        localStorage.removeItem('token');
        localStorage.clear();
        setCurrentUser({});
        setMovies([]);
        setIsLoggenIn(false);
        navigate('/');
      })
      .catch((error) => {
        console.log(`Ошибка выхода пользователя: ${error}`);
      });
  };

  /////////////////////////////////////////////////////////////////////////

  // метод проверки токенов авторизированных пользователей, вернувшихся в приложение
  const handleTokenCheck = () => {
    const token = localStorage.getItem('token');
    if (token) {
      userAuthApi
        .getContent()
        .then((res) => {
          if (res) {
            setIsLoggenIn(true);
            setCurrentUser(res);
            navigate(location.pathname, { replace: true });
          } else {
            setIsLoggenIn(false);
          }
        })
        .catch((error) => {
          console.log(`Ошибка сверки токена: ${error}`);
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

  // начало JSX ////////////////////////////////////////////////////////////
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          {/* рут с информацией об авторе и проекте ///////////////////////////*/}
          <Route
            path="/"
            exact
            element={
              <Main
                isLoggenIn={isLoggenIn}
                handleOpenMenu={handleOpenMenu}
              ></Main>
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

          {/* рут со всеми фильмами ///////////////////////////////////////////*/}
          <Route
            path="/movies"
            element={
              <ProtectedRoute isLoggenIn={isLoggenIn}>
                <Movies
                  isLoading={isLoading}
                  savedMovies={savedMovies}
                  handleOpenMenu={handleOpenMenu}
                  handleMovieSave={handleMovieSave}
                  handleMovieDelete={handleMovieDelete}
                  handleUserMovieFilter={handleUserMovieFilter}
                  handleGetAllMovies={handleGetAllMovies}
                  movies={movies}
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
                  isLoading={isLoading}
                  savedMovies={savedMovies}
                  handleOpenMenu={handleOpenMenu}
                  handleMovieDelete={handleMovieDelete}
                  handleUserMovieFilter={handleUserMovieFilter}
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
