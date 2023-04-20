import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import commonSignLogo from '../../images/c-logo.svg';

import './CommonSignPage.css';

const CommonSignPage = ({
  children,
  heading,
  btnTxt,
  handleUserSubmit,
  linkRoute,
  questionTxt,
  linkTxt,
}) => {
  //подключаем пакет валидации форм
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  //настройки зарегистрированных инпутов
  const inputConfig = {
    name: {
      required: 'Поле "Имя" обязательно к заполнению',
      minLength: { value: 2, message: 'Длина поля "Имя" минумум 2 символа' },
      maxLength: {
        value: 30,
        message: 'Длина поля "Имя" максимум 30 символов',
      },
    },
    email: {
      required: 'Поле "E-mail" обязательно к заполнению',
      pattern: {
        value:
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g,
        message: 'Пожалуйста введите валидный email адрес',
      },
    },
    password: {
      required: 'Поле "Пароль" обязательно к заполнению',
      minLength: { value: 3, message: 'Длина поля "Пароль" минумум 3 символа' },
    },
  };

  function onSubmit(inputData) {
    handleUserSubmit(inputData);
    reset();
  }

  return (
    <div className="common-sign common-sign__container">
      {/* лого с заголовком /////////////////////////////////////////////////*/}
      <img
        className="common-sign__logo"
        src={commonSignLogo}
        alt="логотип в виде буквы C"
      />
      <h2 className="common-sign__heading">{heading}</h2>

      {/* начало формы ///////////////////////////////////////////////////////*/}
      <form onSubmit={handleSubmit(onSubmit)} className="common-sign__form">
        {children}

        {/* импут с именем /////////////////////////////////////////////////*/}
        <label className="common-sign__input-label">E-mail</label>
        <input
          {...register('name', inputConfig.name)}
          id="name"
          type="name"
          className="common-sign__input"
        />
        <span
          className={`card-name-error popup__error ${
            errors?.name && 'popup__error_visible'
          }`}
        >
          {errors?.name && errors.name.message}
        </span>

        {/* импут с имэйлом /////////////////////////////////////////////////*/}
        <label className="common-sign__input-label">E-mail</label>
        <input
          {...register('email', inputConfig.email)}
          id="email"
          type="email"
          className="common-sign__input"
        />
        <span
          className={`card-name-error popup__error ${
            errors?.email && 'popup__error_visible'
          }`}
        >
          {errors?.email && errors.email.message}
        </span>

        {/* импут с паролем /////////////////////////////////////////////////*/}
        <label className="common-sign__input-label">Пароль</label>
        <input
          {...register('password', inputConfig.password)}
          id="password"
          type="password"
          className="common-sign__input"
        />
        <span
          className={`card-name-error popup__error ${
            errors?.password && 'popup__error_visible'
          }`}
        >
          {errors?.password && errors.password.message}
        </span>

        {/* кнопка, вопрос и линк ///////////////////////////////////////////*/}
        <button className="common-sign__submit-btn">{btnTxt}</button>
        <p className="common-sign__question">{questionTxt}</p>
        <Link to={linkRoute} className="common-sign__link">
          {linkTxt}
        </Link>
      </form>
    </div>
  );
};

export default CommonSignPage;
