import { useForm } from 'react-hook-form';
import LoginInput from '../LoginInput/LoginInput';
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
    <section>
      <CommonSignPage
        heading={'Рады видеть!'}
        btnTxt={'Войти'}
        linkRoute={'/signup'}
        questionTxt={'Ещё не зарегистрированы?'}
        linkTxt={'Регистрация'}
        handleSubmit={handleSubmit(onSubmit)}
        inputs={
          <>
            <LoginInput
              labelTxt={'E-mail'}
              register={register('email', inputConfig.email)}
              error={errors?.email && errors.email.message}
              type={'email'}
              errorBool={errors?.email}
            ></LoginInput>

            <LoginInput
              labelTxt={'Пароль'}
              register={register('password', inputConfig.password)}
              error={errors?.password && errors.password.message}
              type={'password'}
              errorBool={errors?.password}
            ></LoginInput>
          </>
        }
      ></CommonSignPage>
    </section>
  );
};

export default Login;
