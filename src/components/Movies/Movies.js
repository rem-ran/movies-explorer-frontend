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
  filteredMovies,
  handleMovieSearch,
  handleMovieSave,
  handleMovieDelete,
  savedMovies,
  isLoading,
}) => {
  /////////////////////////////////////////////////////////////////////////

  // подключаем контекст пользователя
  const currentUser = useContext(CurrentUserContext);

  // переменная состояния статуса фильтра короткометражных фильмов
  const [shortMovieStatus, setShortMovieStatus] = useState(false);

  // метод обработки передачи данных в вверхний компонент для поиска фильмов
  const onMovieSearch = (inputText) => {
    localStorage.setItem(`${currentUser._id}-movieSearchInputValue`, inputText);
    handleMovieSearch(inputText, shortMovieStatus);
  };

  // метод обработки состояния чекбокса короткометражных фильмов при клике по нему
  // и сохранения состояния в локальное хранилище
  const handleShortMovieFilter = () => {
    setShortMovieStatus((ch) => !ch);
    localStorage.setItem(
      `${currentUser._id}-shortMovies`,
      JSON.stringify(!shortMovieStatus)
    );
  };

  // рендерим состояние кнопки при рендеринге компонента в зависимости от
  // данных полученных из локального хранилища
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem(`${currentUser._id}-shortMovies`)) ===
      true
    ) {
      setShortMovieStatus(true);
    } else {
      setShortMovieStatus(false);
    }
  }, [shortMovieStatus, currentUser]);

  // начало JSX ///////////////////////////////////////////////////
  return (
    <div className="movies">
      <Header
        handleOpenMenu={handleOpenMenu}
        links={<Navigation></Navigation>}
      ></Header>

      <main className="saved-movies__content">
        <SearchForm
          handleMovieSearch={onMovieSearch}
          handleShortMovieFilter={handleShortMovieFilter}
          checkedStatus={shortMovieStatus}
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
