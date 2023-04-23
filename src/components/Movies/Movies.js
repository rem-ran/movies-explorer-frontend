// импорты

// импорт компонент
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

//импорт стилей
import './Movies.css';

// компонет главной страницы с фильмами ////////////////////////////////////
const Movies = ({ isMenuClicked, handleOpenMenu }) => {
  return (
    <div className="movies">
      <div>
        <Header
          isMenuClicked={isMenuClicked}
          handleOpenMenu={handleOpenMenu}
          links={<Navigation></Navigation>}
        ></Header>
        <main>
          <SearchForm></SearchForm>
          <MoviesCardList></MoviesCardList>
        </main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Movies;
