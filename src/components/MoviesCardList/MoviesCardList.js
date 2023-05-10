// импорты
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// иморт компонент
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

// импорт кастомного хука
import useWindowSize from '../customHooks/useWIndowSize';

// импорт констант
import {
  mobileMax,
  tabletMax,
  desktopMin,
  mobileMoviesToAdd,
  tabletMoviesToAdd,
  desktopMoviesToAdd,
  mobileInitialMovies,
  tabletInitialMovies,
  desktopInitialMovies,
} from '../../utils/constants';

// импорт стилей
import './MoviesCardList.css';

// компонет списка карточек ////////////////////////////////////////////////
const MoviesCardList = ({
  movieCardList,
  handleMovieSave,
  handleMovieDelete,
  savedMovies,
  isLoading,
}) => {
  /////////////////////////////////////////////////////////////////////////

  const { pathname } = useLocation();
  const [width] = useWindowSize();

  // переменная состояния количества карточек для загрузки при нажатии "Ещё"
  const [moviesToAdd, setMoviesToAdd] = useState(2);

  // переменная состояния количества карточек для рендеринга
  const [movieLimit, setMovieLimit] = useState(0);

  /////////////////////////////////////////////////////////////////////////

  // метод обработки количества карточек к рендерингу
  const setCardRenderAmount = (toAdd, initial) => {
    setMoviesToAdd(toAdd);
    setMovieLimit(initial);
  };

  /////////////////////////////////////////////////////////////////////////

  // метод котроля ширины экрана и выставления количества фильмов для рендеринга
  const handleRenderMoviesAmount = () => {
    if (width < mobileMax) {
      setCardRenderAmount(mobileMoviesToAdd, mobileInitialMovies);
    } else if (width > mobileMax && width < tabletMax) {
      setCardRenderAmount(tabletMoviesToAdd, tabletInitialMovies);
    } else if (width >= desktopMin) {
      setCardRenderAmount(desktopMoviesToAdd, desktopInitialMovies);
    }
  };

  // вызываем handleRenderMoviesAmount при рендеринге страницы
  // для выставления количества фильмов для рендеринга
  useEffect(() => {
    if (pathname !== '/saved-movies') {
      setTimeout(() => handleRenderMoviesAmount(), 500);
    }
  }, [width, pathname]);

  /////////////////////////////////////////////////////////////////////////

  // метод обработки клика на кнопку "Ещё"
  const handleMoreClick = () => {
    setMovieLimit(movieLimit + moviesToAdd);
  };

  /////////////////////////////////////////////////////////////////////////

  // метод проверки есть ли найденный фильм в сохранённых пользователем фильмах
  const isLiked = (movie) => {
    return savedMovies.find((savedMovie) => savedMovie.movieId === movie.id);
  };

  // начало JSX ////////////////////////////////////////////////////////////
  return (
    <section className="movies-list">
      {isLoading && <Preloader />}
      <ul className="movies-list__container">
        {movieCardList
          .slice(0, pathname !== '/saved-movies' ? movieLimit : undefined)
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
      {movieCardList.length > movieLimit && pathname !== '/saved-movies' && (
        <button className="movies-list__more-btn" onClick={handleMoreClick}>
          Ещё
        </button>
      )}
    </section>
  );
};

// экспорт /////////////////////////////////////////////////////////////////
export default MoviesCardList;
