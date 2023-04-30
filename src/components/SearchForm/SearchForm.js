import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" role="search">
          <input
            name="q"
            aria-label="Поиск по списку фильмов на сайте"
            type="search"
            placeholder="Фильм"
            className="search__input"
          ></input>
          <button className="search__btn">Найти</button>
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

export default SearchForm;
