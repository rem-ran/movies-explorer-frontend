// импорт стилей
import './MoviesCard.css';

// компонет карточки с фильмом ////////////////////////////////////////
const MoviesCard = ({ nameRU, duration, image, id, trailerLink }) => {
  //метод подсчёта времени в часа и минутах
  const calculateTiming = (minutes) => {
    return `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;
  };

  //метод обработки клика по иконке лайку
  const handleLikeClick = (ev) => {
    ev.target.classList.toggle('movie__like-btn_active');
  };
  return (
    // начало JSX //////////////////////////////////////////////////////
    <li className="movie" id={id}>
      <a href={trailerLink} target="_blank" rel="noopener noreferrer">
        <img className="movie_image" src={image.url} alt={nameRU} />
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
