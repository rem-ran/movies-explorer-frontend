import { Link } from 'react-router-dom';
import './Movies.css';

import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const Movies = () => {
  return (
    <div className="movies">
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
      <Footer></Footer>
    </div>
  );
};

export default Movies;
