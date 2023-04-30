// импорты
import MoviesCard from '../MoviesCard/MoviesCard';

// импорт стилей
import './MoviesCardList.css';

// компонет списка карточек /////////////////////////////////////
const MoviesCardList = ({ movieCardList }) => {
  return (
    <section className="movies-list">
      <ul className="movies-list__container">
        {movieCardList.map((movie) => (
          <MoviesCard key={movie.id} {...movie} />
        ))}
      </ul>
    </section>
  );
};

// экспорт //////////////////////////////////////////////////////
export default MoviesCardList;
