// импорты
import { useEffect, useLayoutEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

// импорт стилей
import './MoviesCardList.css';

// кастомный хук для получения ширины экрана при её изменении
const useWindowSize = () => {
  const [size, setSize] = useState([0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

// компонет списка карточек ////////////////////////////////////////////////
const MoviesCardList = ({ movieCardList }) => {
  const [width] = useWindowSize();

  // переменная состояния количества карточек для загрузки при нажатии "Ещё"
  const [cardsToAdd, setCardsToAdd] = useState(2);

  // переменная состояния количества карточек для рендеринга
  const [cardLimit, setCardLimit] = useState(0);

  // переменная состояния рендеринга всех имеющихся карточек
  const [allCardsRendered, setAllCardsRendered] = useState(false);

  useEffect(() => {
    if (width < 768) {
      setCardRenderAmount(2, 5);
    } else if (width > 768 && width < 1279) {
      setCardRenderAmount(2, 8);
    } else if (width >= 1280) {
      setCardRenderAmount(3, 12);
    }
  }, [width]);

  // контролируем переменную "cardLimit" для изменения переменной "allCardsRendered"
  useEffect(() => {
    if (cardLimit >= movieCardList.length) {
      setAllCardsRendered(true);
    }
  }, [cardLimit]);

  // метод обработки количества карточек к рендерингу
  const setCardRenderAmount = (toAdd, initial) => {
    setCardsToAdd(toAdd);
    setCardLimit(initial);
  };

  // метод обработки клика на кнопку "Ещё"
  const handleMoreClick = () => {
    setCardLimit(cardLimit + cardsToAdd);
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
