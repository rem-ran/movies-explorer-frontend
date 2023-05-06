// импорты
import { useLocation } from 'react-router-dom';

// импорт констант
import { moviesUrl } from '../../utils/constants';

// импорт стилей
import './MoviesCard.css';

// компонент карточки с фильмом ////////////////////////////////////////
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
  _id,
  handleMovieSave,
  handleMovieDelete,
}) => {
  /////////////////////////////////////////////////////////////////////////

  const location = useLocation();

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

  // метод выбора подходящего image в зависимости от открыто /movies или /saved-movies
  // потому как в нашей базе данных и внешнем Api они отличаются
  const selectImgType = () => {
    return typeof image === 'string' ? image : `${moviesUrl}${image.url}`;
  };

  // метод выбора обработки клака по кнопке лайка или удаления карточки
  // в зависимости от открыто /movies или /saved-movies
  const movieBtnClick = (ev) => {
    if (location.pathname === '/saved-movies') {
      handleMovieDelete(_id);
    } else {
      handleLikeClick(ev);
    }
  };
  return (
    // начало JSX //////////////////////////////////////////////////////
    <li className="movie" id={id}>
      <a href={trailerLink} target="_blank" rel="noopener noreferrer">
        <img className="movie_image" src={selectImgType()} alt={nameRU} />
      </a>

      <div className="movie__text-box">
        <div className="movie__name-box">
          <p className="movie__heading">{nameRU}</p>
          <button
            className={`movie__like-btn ${
              location.pathname === '/saved-movies' &&
              'movie__like-btn_type_delete'
            }`}
            aria-label="Like"
            type="button"
            onClick={movieBtnClick}
          />
        </div>
        <span className="movie__duration">{calculateTiming(duration)}</span>
      </div>
    </li>
  );
};

// экспорт //////////////////////////////////////////////////////
export default MoviesCard;
