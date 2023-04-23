// импорты

//импорт компонент
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

//импорт стилей
import './SavedMovies.css';

// компонет страницы с сохранёнными фильмами //////////////////////////
const SavedMovies = ({ isMenuClicked, handleOpenMenu }) => {
  return (
    <div className="saved-movies">
      <div>
        <Header
          isMenuClicked={isMenuClicked}
          handleOpenMenu={handleOpenMenu}
          links={<Navigation></Navigation>}
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
