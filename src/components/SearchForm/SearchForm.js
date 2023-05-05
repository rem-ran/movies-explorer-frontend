//импорт стилей
import { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({
  handleMovieSearch,
  checkedStatus,
  handleShortMovieFilter,
}) => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleSearchValue = (e) => {
    setSearchInputValue(e.target.value.toLowerCase());
  };

  // метод обработки отправки формы
  const onSearch = (e) => {
    e.preventDefault();
    handleMovieSearch(searchInputValue);
  };

  // начало JSX ///////////////////////////////////////////////////////////////
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" role="search" onSubmit={onSearch}>
          <input
            name="q"
            aria-label="Поиск по списку фильмов на сайте"
            type="search"
            placeholder="Фильм"
            className="search__input"
            onChange={handleSearchValue}
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
              onChange={handleShortMovieFilter}
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
