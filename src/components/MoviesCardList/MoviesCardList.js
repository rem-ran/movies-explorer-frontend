// импорты
import { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// иморт компонент
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
const MoviesCardList = ({
  movieCardList,
  handleMovieSave,
  handleMovieDelete,
  savedMovies,
}) => {
  const { pathname } = useLocation();
  const [width] = useWindowSize();

  // переменная состояния количества карточек для загрузки при нажатии "Ещё"
  const [cardsToAdd, setCardsToAdd] = useState(2);

  // переменная состояния количества карточек для рендеринга
  const [cardLimit, setCardLimit] = useState(0);

  // метод обработки количества карточек к рендерингу
  const setCardRenderAmount = (toAdd, initial) => {
    setCardsToAdd(toAdd);
    setCardLimit(initial);
  };

  // следим за шириной экрана и выставляем количество фильмов для рендеринга
  useEffect(() => {
    if (pathname !== '/saved-movies') {
      if (width < 768) {
        setCardRenderAmount(2, 5);
      } else if (width > 768 && width < 1279) {
        setCardRenderAmount(2, 8);
      } else if (width >= 1280) {
        setCardRenderAmount(3, 12);
      }
    }
  }, [width, pathname]);

  // метод обработки клика на кнопку "Ещё"
  const handleMoreClick = () => {
    setCardLimit(cardLimit + cardsToAdd);
  };

  // метод проверки есть ли найденный фильм в сохранённых пользователем фильмах
  const isLiked = (movie) => {
    return savedMovies.find((savedMovie) => savedMovie.movieId === movie.id);
  };

  // начало JSX ////////////////////////////////////////////////////////////
  return (
    <section className="movies-list">
      <ul className="movies-list__container">
        {movieCardList
          .slice(0, pathname !== '/saved-movies' ? cardLimit : undefined)
          .map((movie) => (
            <MoviesCard
              key={movie.id || movie.movieId}
              {...movie}
              isLiked={isLiked(movie)}
              savedMovies={savedMovies}
              handleMovieSave={handleMovieSave}
              handleMovieDelete={handleMovieDelete}
            />
          ))}
      </ul>
      {movieCardList.length > cardLimit && pathname !== '/saved-movies' && (
        <button className="movies-list__more-btn" onClick={handleMoreClick}>
          Ещё
        </button>
      )}
    </section>
  );
};

// экспорт /////////////////////////////////////////////////////////////////
export default MoviesCardList;
