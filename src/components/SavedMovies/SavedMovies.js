// импорты

//импорт компонент
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

//импорт стилей
import './SavedMovies.css';
import { useEffect } from 'react';

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
  // получаем фильмы через Api и меняем состояние открытой страницы с
  // сохранёнными фильмами при рендеринге страницы
  useEffect(() => {
    handleGetSavedMovie();

    handleSavedMoviesOpen();
  }, []);

  const onSavedMovieSearch = (Inputtext) => {
    handleSavedMovieSearch(Inputtext);
  };

  return (
    // начало JSX //////////////////////////////////////////////////////
    <div className="saved-movies">
      <Header
        handleOpenMenu={handleOpenMenu}
        links={<Navigation></Navigation>}
      ></Header>
      <main className="saved-movies__content">
        <SearchForm handleMovieSearch={onSavedMovieSearch}></SearchForm>
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
