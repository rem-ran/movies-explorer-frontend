import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';

const SavedMovies = () => {
  return (
    <div className="saved-movies">
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
        </main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default SavedMovies;
