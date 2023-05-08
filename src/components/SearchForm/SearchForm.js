// импорты
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// импорт контекста пользователя
import { CurrentUserContext } from '../../context/CurrentUserContext';

// импорт стилей
import './SearchForm.css';

// компонент строки поиска и фильтра
const SearchForm = ({
  handleMovieSearch,
  checkedStatus,
  handleShortMovie,
  isLoading,
}) => {
  /////////////////////////////////////////////////////////////////////////

  const { pathname } = useLocation();

  // подключаем контекст пользователя
  const currentUser = useContext(CurrentUserContext);

  // переменная состояния введённого текста в инпут
  const [searchInputValue, setSearchInputValue] = useState('');

  // передаём введённый в поиске текст в верхний компонент
  const handleSearchValue = (e) => {
    setSearchInputValue(e.target.value.toLowerCase());
  };

  // метод обработки отправки формы
  const onSearch = (e) => {
    e.preventDefault();
    handleMovieSearch(searchInputValue);
  };

  // проверяем на какой мы странице, используя location.pathname и отображаем
  // введённый ранее текст запроса при рендере страницы, если он есть
  useEffect(() => {
    const movieSearchInputValue = localStorage.getItem(
      `${currentUser._id}-movieSearchInputValue`
    );
    if (pathname === '/movies' && movieSearchInputValue) {
      setSearchInputValue(movieSearchInputValue);
    }
  }, [currentUser]);

  // начало JSX ///////////////////////////////////////////////////////////////
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" role="search" onSubmit={onSearch}>
          <input
            disabled={isLoading && true}
            name="q"
            aria-label="Поиск по списку фильмов на сайте"
            type="search"
            placeholder="Фильм"
            className="search__input"
            onChange={handleSearchValue}
            value={searchInputValue || ''}
          ></input>
          <button className="search__btn" onClick={onSearch}>
            Найти
          </button>
        </form>
        <div className="search__filter">
          <p className="search__filter-txt">Короткометражки</p>
          <label className="toogle-switch toogle-switch__container">
            <input
              checked={checkedStatus}
              className="toogle-switch__ckeckbox"
              type="checkbox"
              onChange={handleShortMovie}
            ></input>
            <span className="toogle-switch__slider"></span>
          </label>
        </div>
      </div>
    </section>
  );
};

// экспорт ///////////////////////////////////////////////////////////////////
export default SearchForm;
