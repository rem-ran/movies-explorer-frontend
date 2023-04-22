// импорты

// импорт компонент
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import { headerMoviesLinks } from '../../utils/constants';

//импорт стилей
import './Movies.css';
import { useEffect } from 'react';

// компонет главной страницы с фильмами ////////////////////////////////////
const Movies = ({ isMenuClicked, handleOpenMenu, isMainOpen }) => {
  useEffect(() => {
    console.log(isMainOpen);
  });
  return (
    <div className="movies">
      <div>
        <Header
          isMainOpen={isMainOpen}
          isMenuClicked={isMenuClicked}
          handleOpenMenu={handleOpenMenu}
          headerLinkList={headerMoviesLinks}
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
