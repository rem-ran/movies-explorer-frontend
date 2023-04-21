import { movieCards } from '../../../utils/constants';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

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

export default MoviesCardList;
