// импорты
import { useEffect, useState } from 'react';

//импорт компонент
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

//импорт стилей
import './SavedMovies.css';

// компонент страницы с сохранёнными фильмами //////////////////////////
const SavedMovies = ({
  handleOpenMenu,
  handleMovieDelete,
  handleSavedMovieSearch,
  savedMovies,
}) => {
  /////////////////////////////////////////////////////////////////////////

  // переменная состояния статуса фильтра короткометражных фильмов
  const [shortSavedMovieStatus, setShortSavedMovieStatus] = useState(false);

  /////////////////////////////////////////////////////////////////////////

  // метод обработки состояния чекбокса короткометражных фильмов при клике по нему
  const handleShortMovieFilter = () => {
    setShortSavedMovieStatus((ch) => !ch);
  };

  /////////////////////////////////////////////////////////////////////////

  // метод обработки передачи данных в вверхний компонент для поиска фильмов
  const onSavedMovieSearch = (inputText) => {
    handleSavedMovieSearch(inputText, shortSavedMovieStatus);
  };

  return (
    // начало JSX //////////////////////////////////////////////////////
    <div className="saved-movies">
      <Header
        handleOpenMenu={handleOpenMenu}
        links={<Navigation></Navigation>}
      ></Header>
      <main className="saved-movies__content">
        <SearchForm
          handleMovieSearch={onSavedMovieSearch}
          handleShortMovieFilter={handleShortMovieFilter}
        ></SearchForm>
        <MoviesCardList
          movieCardList={savedMovies}
          handleMovieDelete={handleMovieDelete}
          savedMovies={savedMovies}
        ></MoviesCardList>
      </main>

      <Footer></Footer>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default SavedMovies;
