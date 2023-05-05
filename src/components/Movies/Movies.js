// импорты

// импорт компонент
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

//импорт стилей
import './Movies.css';
import { useEffect } from 'react';

// компонет главной страницы с фильмами ////////////////////////////////////
const Movies = ({
  handleOpenMenu,
  filteredMovies,
  handleMovieSearch,
  handleMovieSave,
  handleGetAllMovies,
}) => {
  // useEffect(() => {
  //   handleGetAllMovies();
  // }, []);
  const onMovieSearch = (inputText) => {
    handleMovieSearch(inputText);
  };
  // начало JSX ///////////////////////////////////////////////////
  return (
    <div className="movies">
      <Header
        handleOpenMenu={handleOpenMenu}
        links={<Navigation></Navigation>}
      ></Header>

      <main className="saved-movies__content">
        <SearchForm handleMovieSearch={onMovieSearch}></SearchForm>
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
