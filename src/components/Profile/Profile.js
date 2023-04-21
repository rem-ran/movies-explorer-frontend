import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Profile.css';

const Profile = () => {
  const handleEditClick = () => {};
  return (
    <div>
      <Header
        links={
          <div className="movies__link-container">
            <Link to="/movies" className="movies__link">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="movies__link">
              Сохранённые фильмы
            </Link>
            <Link
              to="/profile"
              className="movies__link movies__link_type_account"
            >
              Аккаунт
            </Link>
          </div>
        }
      ></Header>
      <div className="profile__container">
        <h1 className="profile__heading">Привет, Руслан!</h1>
        <form className="profile__form">
          <div className="profile__form-element">
            <label className="profile__input-label">Имя</label>
            <input
              disabled
              type="name"
              name="name"
              className="profile__input"
            ></input>
          </div>
          <div className="profile__form-element">
            <label className="profile__input-label">E-mail</label>
            <input
              disabled
              type="email"
              name="email"
              className="profile__input"
            ></input>
          </div>
        </form>
        <div className="profile__btn-box">
          <button onClick={handleEditClick} className="profile__edit-btn">
            Редактировать
          </button>
          <Link to="/signin" className="profile__logout">
            Выйти из аккаунта
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
