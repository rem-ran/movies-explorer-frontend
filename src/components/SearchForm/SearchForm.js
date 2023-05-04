//импорт стилей
import { useEffect, useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ handleMovieSearch }) => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleSearchValue = (e) => {
    setSearchInputValue(e.target.value.toLowerCase());
  };

  // метод обработки отправки формы
  const onSearch = (e) => {
    e.preventDefault();
    handleMovieSearch(searchInputValue);
    // localStorage.setItem('searchValue', searchInputValue);
  };

  // useEffect(() => {
  //   const searchInput = document.querySelector('.search__input');
  //   searchInput.value = localStorage.getItem('searchValue');
  // }, []);
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
            <input className="toogle-switch__ckeckbox" type="checkbox"></input>
            <span className="toogle-switch__slider"></span>
          </label>
        </div>
      </div>
    </section>
  );
};

// экспорт ///////////////////////////////////////////////////////////////////
export default SearchForm;
