// импорты
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import { inputConfig } from '../../utils/constants';

// импорт стилей
import './Profile.css';

// компонет профиля //////////////////////////////////////////////////////
const Profile = () => {
  //подключаем пакет валидации форм
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  // состояние, которое меняется при нажатии на кнопку формы
  const [isEditOn, setIsEditOn] = useState(false);

  const profileInputs = document.querySelectorAll('.profile__input');

  // метод обработки клика по кнопке редактирования
  const handleEditClick = (ev) => {
    ev.preventDefault();
    setIsEditOn(true);
    profileInputs.forEach((input) => input.removeAttribute('disabled'));
  };

  // метод обработки клика по кнопке сохранения изменений
  const handleSaveClick = (ev) => {
    ev.preventDefault();
    setIsEditOn(false);
    profileInputs.forEach((input) => input.setAttribute('disabled', true));
  };

  // начало JSX ////////////////////////////////////////////////////////////
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
              {...register('name', inputConfig.name)}
              disabled
              id="name"
              type="name"
              name="name"
              className="profile__input"
            ></input>
          </div>
          <div className="profile__form-element">
            <label className="profile__input-label">E-mail</label>
            <input
              {...register('email', inputConfig.email)}
              disabled
              id="email"
              type="email"
              name="email"
              className="profile__input"
            ></input>
          </div>

          {/* рендерим ту или иную кнопку форму в зависимости от значения состояние isEditOn */}
          {!isEditOn ? (
            <button onClick={handleEditClick} className="profile__edit-btn">
              Редактировать
            </button>
          ) : (
            <>
              {/* текст ошибки появляется в зависимости от наличия ошибок в инпутах */}
              <span className="profile__error-txt">
                {(errors?.name && errors.name.message) ||
                  (errors?.email && errors.email.message)}
              </span>

              {/* у кнопки меняется стиль в зависимости от наличия ошибок в инпутах */}
              <button
                onClick={handleSaveClick}
                className={`profile__save-btn ${
                  (errors?.name || errors?.email) &&
                  'profile__save-btn_disabled'
                }`}
              >
                Сохранить
              </button>
            </>
          )}
        </form>

        {/* рендерим ссылку выхода в зависимости от значения состояние isEditOn */}
        {!isEditOn && (
          <Link to="/signin" className="profile__logout">
            Выйти из аккаунта
          </Link>
        )}
      </div>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Profile;
