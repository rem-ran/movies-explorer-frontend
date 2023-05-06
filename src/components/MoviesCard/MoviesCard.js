// импорты
import { useLocation } from 'react-router-dom';

// импорт констант
import { moviesUrl } from '../../utils/constants';
import { calculateTiming } from '../../utils/utils';

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
  savedMovies,
  isLiked,
}) => {
  /////////////////////////////////////////////////////////////////////////

  const { pathname } = useLocation();

  /////////////////////////////////////////////////////////////////////////

  // метод обработки удаления удаления фильма
  const onMovieDelete = () => {
    handleMovieDelete(_id);
  };

  //метод обработки клика по иконке лайку
  const handleLikeClick = () => {
    // если фильм не сохранён, то сохраняем фильм
    if (!isLiked) {
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
    } else {
      // если фильм сохранён, то находим этот фильм в списке сохранённых и берем его _id
      const foundSavedMovie = savedMovies.find((m) => m.movieId === id);
      handleMovieDelete(foundSavedMovie._id);
    }
  };
  /////////////////////////////////////////////////////////////////////////

  // метод выбора подходящего image в зависимости от открыто /movies или /saved-movies
  // потому как в нашей базе данных и внешнем Api они отличаются
  const selectImgType = () => {
    return typeof image === 'string' ? image : `${moviesUrl}${image.url}`;
  };

  /////////////////////////////////////////////////////////////////////////

  return (
    // начало JSX //////////////////////////////////////////////////////
    <li className="movie" id={id}>
      <a href={trailerLink} target="_blank" rel="noopener noreferrer">
        <img className="movie_image" src={selectImgType()} alt={nameRU} />
      </a>

      <div className="movie__text-box">
        <div className="movie__name-box">
          <p className="movie__heading">{nameRU}</p>
          {/* рендерим кнопку в зависимости от текущего рута */}
          {pathname === '/movies' ? (
            // кнопка лайка\удаления
            <button
              className={`movie__like-btn ${
                isLiked && 'movie__like-btn_active'
              }`}
              aria-label="Like"
              type="button"
              onClick={handleLikeClick}
            />
          ) : (
            // кнопка удаления
            <button
              className="movie__like-btn 
                movie__like-btn_type_delete"
              aria-label="Delete"
              type="button"
              onClick={onMovieDelete}
            />
          )}
        </div>
        <span className="movie__duration">{calculateTiming(duration)}</span>
      </div>
    </li>
  );
};

// экспорт //////////////////////////////////////////////////////
export default MoviesCard;
