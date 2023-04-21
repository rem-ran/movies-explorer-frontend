import './MoviesCard.css';

const MoviesCard = ({ nameRU, duration, image, id }) => {
  //определяем какие фильмы лайкнуты нами
  const isLiked = true;

  //назначаем переменной стили в зависимости от того лайкнули мы карточку или нет
  const movieLikeButtonClassName = `movie__like-btn ${
    isLiked && 'movie__like-btn_active'
  }`;

  const durationHrs = Math.floor(duration / 60);
  const durationMin = duration % 60;

  //метод обработки клика по иконке лайку
  const handleLikeClick = (ev) => {
    ev.target.classList.toggle('movie__like-btn_active');
  };
  return (
    <li className="movie" id={id}>
      <img className="movie_image" src={image.url} alt={nameRU} />

      <div className="movie__text-box">
        <div className="movie__name-box">
          <p className="movie__heading">{nameRU}</p>
          <button
            className={movieLikeButtonClassName}
            aria-label="Like"
            type="button"
            onClick={handleLikeClick}
          />
        </div>
        <span className="movie__duration">{`${durationHrs}ч ${durationMin}м`}</span>
      </div>
    </li>
  );
};

export default MoviesCard;
