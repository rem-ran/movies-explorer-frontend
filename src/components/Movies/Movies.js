// импорты
import { useContext, useEffect, useState } from 'react';

// импорт контекста пользователя
import { CurrentUserContext } from '../../context/CurrentUserContext';

// импорт компонент
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

//импорт стилей
import './Movies.css';

// компонент главной страницы с фильмами ////////////////////////////////////
const Movies = ({
  handleOpenMenu,
  handleMovieSave,
  handleMovieDelete,
  savedMovies,
  isLoading,
  handleUserMovieFilter,
  movies,
  handleGetAllMovies,
}) => {
  /////////////////////////////////////////////////////////////////////////

  // подключаем контекст пользователя
  const currentUser = useContext(CurrentUserContext);

  // переменная состояния статуса фильтра короткометражных фильмов
  const [shortMovieStatus, setShortMovieStatus] = useState(false);

  // переменная состояния отфильтрованного пользователем массива с фильмами
  const [filteredMovies, setFilteredMovies] = useState([]);

  /////////////////////////////////////////////////////////////////////////

  // метод обработки всех полученных фильмов фильтром пользователя
  const onMovieSearch = async (inputText) => {
    localStorage.setItem(`${currentUser._id}-movieSearchInputValue`, inputText);

    // проверяем был ли совершён уже поиск карточек и если, нет, то
    // обращаемся к api для загрузки всех фильмов
    if (movies.length === 0) {
      await handleGetAllMovies();
    }

    // сохраняем в локальное хранилище результат фильтрации
    localStorage.setItem(
      `${currentUser._id}-filteredMovies`,
      JSON.stringify(
        handleUserMovieFilter(
          JSON.parse(localStorage.getItem(`${currentUser._id}-movies`)),
          inputText,
          shortMovieStatus
        )
      )
    );

    // достаём из локального хранилища сохранённые отфильтрованные фильмы
    // и передаём их переменной "filteredMovies"
    setFilteredMovies(
      JSON.parse(localStorage.getItem(`${currentUser._id}-filteredMovies`))
    );
  };

  /////////////////////////////////////////////////////////////////////////

  // метод обработки "filteredMovies" в зависимости от
  // данных полученных из локального хранилища
  const handleFIlteredMoviesRender = () => {
    const allMovies = JSON.parse(
      localStorage.getItem(`${currentUser._id}-movies`)
    );
    if (allMovies) {
      setFilteredMovies(
        handleUserMovieFilter(
          JSON.parse(localStorage.getItem(`${currentUser._id}-movies`)),
          localStorage.getItem(`${currentUser._id}-movieSearchInputValue`),
          shortMovieStatus
        )
      );
    }
  };

  /////////////////////////////////////////////////////////////////////////

  // метод обработки состояния чекбокса короткометражных фильмов при клике по нему
  // и сохранения состояния в локальное хранилище
  const handleShortMovie = () => {
    setShortMovieStatus((ch) => !ch);
    localStorage.setItem(
      `${currentUser._id}-shortMovies`,
      JSON.stringify(!shortMovieStatus)
    );
  };
  /////////////////////////////////////////////////////////////////////////

  // метод изменения состояние кнопки короткометражных фильмов в зависимости от
  // данных полученных из локального хранилища
  const handleShortMovieRender = () => {
    const shortMoviesFilter = JSON.parse(
      localStorage.getItem(`${currentUser._id}-shortMovies`)
    );
    if (shortMoviesFilter === true) {
      setShortMovieStatus(true);
    } else {
      setShortMovieStatus(false);
    }
  };

  /////////////////////////////////////////////////////////////////////////

  // вызываем методы рендеринга состояние кнопки короткометражек и
  // отфильтрванных фильмов при рендеринге компонента
  useEffect(() => {
    handleShortMovieRender();

    handleFIlteredMoviesRender();
  }, [shortMovieStatus, currentUser]);

  // начало JSX //////////////////////////////////////////////////////////
  return (
    <div className="movies">
      <Header
        handleOpenMenu={handleOpenMenu}
        links={<Navigation></Navigation>}
      ></Header>

      <main className="saved-movies__content">
        <SearchForm
          handleMovieSearch={onMovieSearch}
          handleShortMovie={handleShortMovie}
          checkedStatus={shortMovieStatus}
          isLoading={isLoading}
        ></SearchForm>
        <MoviesCardList
          movieCardList={filteredMovies}
          handleMovieSave={handleMovieSave}
          savedMovies={savedMovies}
          handleMovieDelete={handleMovieDelete}
          isLoading={isLoading}
        ></MoviesCardList>
      </main>

      <Footer></Footer>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Movies;
