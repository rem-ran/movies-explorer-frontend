// импорты
import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

// импорт стилей
import './MoviesCardList.css';

// компонет списка карточек ////////////////////////////////////////////////
const MoviesCardList = ({ movieCardList }) => {
  // переменная состояния количества карточек для рендеринга
  const [cardLimit, setCardLimit] = useState(3);

  // переменная состояния рендеринга всех имеющихся карточек
  const [allCardsRendered, setAllCardsRendered] = useState(false);

  // контролируем переменную "cardLimit" для изменения переменной "allCardsRendered"
  useEffect(() => {
    if (cardLimit >= movieCardList.length) {
      setAllCardsRendered(true);
    }
  }, [cardLimit]);

  // метод обработки клика на кнопку "Ещё"
  const handleMoreClick = () => {
    setCardLimit(cardLimit + 3);
  };
  // начало JSX ////////////////////////////////////////////////////////////
  return (
    <section className="movies-list">
      <ul className="movies-list__container">
        {movieCardList.slice(0, cardLimit).map((movie) => (
          <MoviesCard key={movie.id} {...movie} />
        ))}
      </ul>
      {movieCardList.length > 0 && !allCardsRendered && (
        <button className="movies-list__more-btn" onClick={handleMoreClick}>
          Ещё
        </button>
      )}
    </section>
  );
};

// экспорт /////////////////////////////////////////////////////////////////
export default MoviesCardList;
