// импорты
import { movieCards } from '../../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';

// импорт стилей
import './MoviesCardList.css';

// компонет списка карточек /////////////////////////////////////
const MoviesCardList = () => {
  return (
    <section className="movies-list">
      <ul className="movies-list__container">
        {movieCards.map((movie) => (
          <MoviesCard key={movie.id} {...movie} />
        ))}
      </ul>
    </section>
  );
};

// экспорт //////////////////////////////////////////////////////
export default MoviesCardList;
