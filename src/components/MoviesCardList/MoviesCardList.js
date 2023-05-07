// импорты
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// импорт контекста пользователя
import { CurrentUserContext } from '../../context/CurrentUserContext';

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
  moviesListLength,
  handleMovieSave,
  handleMovieDelete,
  savedMovies,
}) => {
  // подключаем контекст пользователя
  const currentUser = useContext(CurrentUserContext);
  const { pathname } = useLocation();
  const [width] = useWindowSize();

  // переменная состояния количества карточек для загрузки при нажатии "Ещё"
  const [cardsToAdd, setCardsToAdd] = useState(2);

  // переменная состояния количества карточек для рендеринга
  const [cardLimit, setCardLimit] = useState(0);

  // переменная состояния рендеринга всех имеющихся карточек
  const [allCardsRendered, setAllCardsRendered] = useState(false);

  // метод обработки количества карточек к рендерингу
  const setCardRenderAmount = (toAdd, initial) => {
    setCardsToAdd(toAdd);
    setCardLimit(initial);
  };

  // useEffect(() => {
  //   const movLen = JSON.parse(
  //     localStorage.getItem(`${currentUser._id}-filteredMovies`)
  //   ).length;
  //   console.log(`moviesLocalSto ${movLen}`);
  //   console.log(`moviesListLength ${moviesListLength}`);
  //   console.log(`cardLimit ${cardLimit}`);
  //   console.log(allCardsRendered);
  // }, [moviesListLength, cardLimit, allCardsRendered]);

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
  }, [width, pathname, moviesListLength]);

  // const returnvalue = () => {
  //   const movLen = JSON.parse(
  //     localStorage.getItem(`${currentUser._id}-filteredMovies`)
  //   ).length;
  //   return movLen;
  // };

  // контролируем переменную "cardLimit" для изменения переменной "allCardsRendered"
  useEffect(() => {
    const movLen = JSON.parse(
      localStorage.getItem(`${currentUser._id}-filteredMovies`)
    ).length;
    if (cardLimit >= movLen && pathname !== '/saved-movies') {
      setAllCardsRendered(true);
    }
  }, [cardLimit, pathname, currentUser]);

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
      {!allCardsRendered && pathname !== '/saved-movies' && (
        <button className="movies-list__more-btn" onClick={handleMoreClick}>
          Ещё
        </button>
      )}
    </section>
  );
};

// экспорт /////////////////////////////////////////////////////////////////
export default MoviesCardList;
