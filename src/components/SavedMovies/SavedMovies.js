// импорты

//импорт компонент
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

// ипорт констант
import { savedMovies } from '../../utils/constants';

//импорт стилей
import './SavedMovies.css';

// компонет страницы с сохранёнными фильмами //////////////////////////
const SavedMovies = ({ handleOpenMenu }) => {
  return (
    <div className="saved-movies">
      <div>
        <Header
          handleOpenMenu={handleOpenMenu}
          links={<Navigation></Navigation>}
        ></Header>
        <main>
          <SearchForm></SearchForm>
          <MoviesCardList movieCardList={savedMovies}></MoviesCardList>
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
