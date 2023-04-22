// импорты
import { Link } from 'react-router-dom';

// импорт компонент
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

//импорт стилей
import './Movies.css';

// компонет главной страницы с фильмами ////////////////////////////////////
const Movies = () => {
  return (
    <div className="movies">
      <div>
        <Header
          links={
            <div className="movies__link-container">
              <Link to="/movies" className="movies__link">
                Фильмы
              </Link>
              <Link to="/saved-movies" className="movies__link">
                Сохранённые фильмы
              </Link>
              <Link
                to="/profile"
                className="movies__link movies__link_type_account"
              >
                Аккаунт
              </Link>
            </div>
          }
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
