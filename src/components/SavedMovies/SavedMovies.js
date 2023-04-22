// импорты

//импорт компонент
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';

import { headerMoviesLinks } from '../../utils/constants';

//импорт стилей
import './SavedMovies.css';

// компонет страницы с сохранёнными фильмами //////////////////////////
const SavedMovies = ({ isMenuClicked, handleOpenMenu, isMainOpen }) => {
  return (
    <div className="saved-movies">
      <div>
        <Header
          isMainOpen={isMainOpen}
          isMenuClicked={isMenuClicked}
          handleOpenMenu={handleOpenMenu}
          headerLinkList={headerMoviesLinks}
        ></Header>
        <main>
          <SearchForm></SearchForm>
        </main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default SavedMovies;
