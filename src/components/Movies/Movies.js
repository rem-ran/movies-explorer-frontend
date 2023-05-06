// импорты
import { useEffect, useState } from 'react';

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
}) => {
  /////////////////////////////////////////////////////////////////////////

  // переменная состояния статуса фильтра короткометражных фильмов
  const [shortMovieStatus, setShortMovieStatus] = useState(false);

  // метод обработки передачи данных в вверхний компонент для поиска фильмов
  const onMovieSearch = (inputText) => {
    localStorage.setItem('movieSearchInputValue', inputText);
    handleMovieSearch(inputText, shortMovieStatus);
  };

  // метод обработки состояния чекбокса короткометражных фильмов при клике по нему
  // и сохранения состояния в локальное хранилище
  const handleShortMovieFilter = () => {
    setShortMovieStatus((ch) => !ch);
    localStorage.setItem('shortMovies', JSON.stringify(!shortMovieStatus));
  };

  // рендерим состояние кнопки при рендеринге компонента в зависимости от
  // данных полученных из локального хранилища
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('shortMovies')) === true) {
      setShortMovieStatus(true);
    } else {
      setShortMovieStatus(false);
    }
  }, [shortMovieStatus]);

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
          // handleShortFiltering={onShortFilter}
        ></SearchForm>
        <MoviesCardList
          movieCardList={filteredMovies}
          handleMovieSave={handleMovieSave}
        ></MoviesCardList>
      </main>

      <Footer></Footer>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Movies;
