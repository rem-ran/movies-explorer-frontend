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
  handleSavedMoviesOpen,
  isSavedMoviesOpen,
  handleOpenMenu,
  handleGetSavedMovie,
  handleMovieDelete,
  handleSavedMovieSearch,
  savedMovies,
}) => {
  // переменная состояния статуса фильтра короткометражных фильмов
  const [shortSavedMovieStatus, setShortSavedMovieStatus] = useState(false);

  // метод обработки состояния чекбокса короткометражных фильмов при клике по нему
  // и сохранения состояния в локальное хранилище
  const handleShortMovieFilter = () => {
    setShortSavedMovieStatus((ch) => !ch);
    localStorage.setItem(
      'shortSavedMovies',
      JSON.stringify(!shortSavedMovieStatus)
    );
  };

  // рендерим состояние кнопки при рендеринге компонента в зависимости от
  // данных полученных из локального хранилища
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('shortSavedMovies')) === true) {
      setShortSavedMovieStatus(true);
    } else {
      setShortSavedMovieStatus(false);
    }
  }, [shortSavedMovieStatus]);

  // получаем фильмы через Api и меняем состояние открытой страницы с
  // сохранёнными фильмами при рендеринге страницы
  useEffect(() => {
    handleGetSavedMovie();

    handleSavedMoviesOpen();
  }, []);

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
          checkedStatus={shortSavedMovieStatus}
        ></SearchForm>
        <MoviesCardList
          movieCardList={savedMovies}
          handleMovieDelete={handleMovieDelete}
          isSavedMoviesOpen={isSavedMoviesOpen}
        ></MoviesCardList>
      </main>

      <Footer></Footer>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default SavedMovies;
