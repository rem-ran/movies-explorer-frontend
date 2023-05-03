// импорт констант
import { moviesUrl } from '../../utils/constants';

// импорт стилей
import './MoviesCard.css';

// компонет карточки с фильмом ////////////////////////////////////////
const MoviesCard = ({
  country,
  director,
  duration,
  year,
  description,
  image,
  nameRU,
  nameEN,
  id,
  trailerLink,
  handleMovieSave,
}) => {
  //метод подсчёта времени в часа и минутах
  const calculateTiming = (minutes) => {
    return `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;
  };

  //метод обработки клика по иконке лайку
  const handleLikeClick = (ev) => {
    ev.target.classList.toggle('movie__like-btn_active');
    handleMovieSave({
      country,
      director,
      duration,
      year,
      description,
      image: `${moviesUrl}${image.url}`,
      nameRU,
      nameEN,
      thumbnail: `${moviesUrl}${image.formats.thumbnail.url}`,
      movieId: id,
      trailerLink,
    });
  };
  return (
    // начало JSX //////////////////////////////////////////////////////
    <li className="movie" id={id}>
      <a href={trailerLink} target="_blank" rel="noopener noreferrer">
        <img
          className="movie_image"
          src={typeof image === 'string' ? image : `${moviesUrl}${image.url}`}
          alt={nameRU}
        />
      </a>

      <div className="movie__text-box">
        <div className="movie__name-box">
          <p className="movie__heading">{nameRU}</p>
          <button
            className="movie__like-btn"
            aria-label="Like"
            type="button"
            onClick={handleLikeClick}
          />
        </div>
        <span className="movie__duration">{calculateTiming(duration)}</span>
      </div>
    </li>
  );
};

// экспорт //////////////////////////////////////////////////////
export default MoviesCard;
