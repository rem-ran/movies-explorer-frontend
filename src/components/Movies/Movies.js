// импорты

// импорт компонент
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

// ипорт констант
import { movieCards } from '../../utils/constants';

//импорт стилей
import './Movies.css';

// компонет главной страницы с фильмами ////////////////////////////////////
const Movies = ({
  handleOpenMenu,
  movies,
  handleMovieSearch,
  handleMovieSave,
}) => {
  // начало JSX ///////////////////////////////////////////////////
  return (
    <div className="movies">
      <Header
        handleOpenMenu={handleOpenMenu}
        links={<Navigation></Navigation>}
      ></Header>

      <main className="saved-movies__content">
        <SearchForm handleMovieSearch={handleMovieSearch}></SearchForm>
        <MoviesCardList
          movieCardList={movies}
          handleMovieSave={handleMovieSave}
        ></MoviesCardList>
      </main>

      <Footer></Footer>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Movies;
