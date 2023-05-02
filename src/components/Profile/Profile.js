// импорты
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

// импорт компонент
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

// импорт констант
import { inputConfig } from '../../utils/constants';

// импорт стилей
import './Profile.css';

// компонет профиля //////////////////////////////////////////////////////
const Profile = ({ handleOpenMenu, handleSignOut }) => {
  //подключаем пакет валидации форм
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: 'Виталий',
      email: 'pochta@yandex.ru',
    },
  });

  // состояние, которое меняется при нажатии на кнопку формы
  const [isEditOn, setIsEditOn] = useState(false);
  const profileInputs = document.querySelectorAll('.profile__input');

  const toggleInputState = () => {
    profileInputs.forEach((input) => input.toggleAttribute('disabled'));
  };

  useEffect(() => {
    toggleInputState();
  }, [isEditOn]);

  // метод обработки клика по кнопке редактирования
  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEditOn(true);
  };

  const onSubmit = (data) => {
    setIsEditOn(false);
    console.log(data);
  };

  // начало JSX ////////////////////////////////////////////////////////////
  return (
    <div className="profile">
      <Header
        handleOpenMenu={handleOpenMenu}
        links={<Navigation></Navigation>}
      ></Header>
      <div className="profile__container">
        <h1 className="profile__heading">Привет, Виталий!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="profile__form">
          <div className="profile__form-element-box">
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
          </div>

          {/* рендерим кнопку формы в зависимости от значения состояние isEditOn */}
          {isEditOn && (
            <div className="profile__container-btns">
              {/* текст ошибки появляется в зависимости от наличия ошибок в инпутах */}
              <span className="profile__error-txt">
                {(errors?.name && errors.name.message) ||
                  (errors?.email && errors.email.message)}
              </span>

              {/* у кнопки меняется стиль в зависимости от наличия ошибок в инпутах */}
              <button
                onClick={handleSubmit(onSubmit)}
                className={`profile__save-btn ${
                  (errors?.name || errors?.email) &&
                  'profile__save-btn_disabled'
                }`}
              >
                Сохранить
              </button>
            </div>
          )}
        </form>
        {/* рендерим кнопку редактирования и ссылку выхода 
        в зависимости от значения состояние isEditOn */}
        {!isEditOn && (
          <div className="profile__container-btns">
            <button className="profile__edit-btn" onClick={handleEditClick}>
              Редактировать
            </button>
            <button className="profile__logout" onClick={handleSignOut}>
              Выйти из аккаунта
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Profile;
