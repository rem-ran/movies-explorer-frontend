// импорты
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

// импорт контекста пользователя
import { CurrentUserContext } from '../../context/CurrentUserContext';

// импорт компонент
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

// импорт констант
import { inputConfig } from '../../utils/constants';

// импорт стилей
import './Profile.css';

// компонет профиля //////////////////////////////////////////////////////
const Profile = ({ handleOpenMenu, handleSignOut, handleUserUpdate }) => {
  // подключаем контекст пользователя
  const currentUser = useContext(CurrentUserContext);

  // состояние, которое меняется при нажатии на кнопку формы
  const [isEditOn, setIsEditOn] = useState(false);

  // переменная сравнения значений инпута и currentUser
  const [isInputValueSame, setIsInputValueSame] = useState(true);

  ///////////////////////////////////////////////////////////////////////////

  //подключаем пакет валидации форм
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email,
    },
  });

  ///////////////////////////////////////////////////////////////////////////

  // находим все инпуты на странице
  const profileInputs = document.querySelectorAll('.profile__input');

  // включаем и выключаем инпуты при изменении сосотояния isEditOn
  useEffect(() => {
    const toggleInputState = () => {
      profileInputs.forEach((input) => input.toggleAttribute('disabled'));
    };
    toggleInputState();
  }, [isEditOn]);

  ///////////////////////////////////////////////////////////////////////////

  // назначаем слежение за значением инпутов name и email
  const name = watch('name');
  const email = watch('email');

  // метод сравнения значений инпутов и смены состояния кнопки сохранения
  const handleInputsValues = () => {
    if (currentUser.name === name && currentUser.email === email) {
      setIsInputValueSame(false);
    } else {
      setIsInputValueSame(true);
    }
    document.querySelector('.profile__save-btn').toggleAttribute('disabled');
  };

  // запускаем метод handleInputsValues каждый раз при изменении name, email и isEditOn
  useEffect(() => {
    if (isEditOn) {
      handleInputsValues();
    }
  }, [name, email, isEditOn]);

  ///////////////////////////////////////////////////////////////////////////

  // метод обработки клика по кнопке редактирования
  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEditOn(true);
  };

  // метод обработки клика по кнопке сохранения
  const onSubmit = (data) => {
    handleUserUpdate(data);
    setIsEditOn(false);
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
              {/* импут с именем */}
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
              {/* импут с электронным адресом */}
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

              {/* у кнопки сохранения изменений меняется стиль в зависимости от 
              наличия ошибок в инпутах */}
              <button
                id="save-btn"
                onClick={handleSubmit(onSubmit)}
                className={`profile__save-btn ${
                  (errors?.name || errors?.email || !isInputValueSame) &&
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
