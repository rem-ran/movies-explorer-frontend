import { useForm } from 'react-hook-form';
import { inputConfig } from '../../utils/constants';
import CommonSignPage from '../CommonSignPage/CommonSignPage';

//импорт стилей
import './Login.css';

const Login = ({ handleUserSignIn }) => {
  //подключаем пакет валидации форм
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  function onSubmit(inputData) {
    handleUserSignIn(inputData);
    reset();
  }

  return (
    <div>
      <CommonSignPage
        heading={'Рады видеть!'}
        btnTxt={'Войти'}
        linkRoute={'/signup'}
        questionTxt={'Ещё не зарегистрированы?'}
        linkTxt={'Регистрация'}
        handleSubmit={handleSubmit(onSubmit)}
        inputs={
          <>
            {/* импут с имэйлом /////////////////////////////////////////////////*/}
            <label className="sign__input-label">E-mail</label>
            <input
              {...register('email', inputConfig.email)}
              id="email"
              type="email"
              className="sign__input"
            />
            <span className={'sign__input-error'}>
              {errors?.email && errors.email.message}
            </span>

            {/* импут с паролем /////////////////////////////////////////////////*/}
            <label className="sign__input-label">Пароль</label>
            <input
              {...register('password', inputConfig.password)}
              id="password"
              type="password"
              className="sign__input"
            />
            <span className={'sign__input-error'}>
              {errors?.password && errors.password.message}
            </span>
          </>
        }
      ></CommonSignPage>
    </div>
  );
};

export default Login;
