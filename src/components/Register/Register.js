import { useForm } from 'react-hook-form';
import LoginInput from '../LoginInput/LoginInput';
import { inputConfig } from '../../utils/constants';
import CommonSignPage from '../CommonSignPage/CommonSignPage';

//импорт стилей
import './Register.css';

const Register = ({ handleUserSignUp }) => {
  //подключаем пакет валидации форм
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (inputData) => {
    handleUserSignUp(inputData);
    reset();
  };

  return (
    <div>
      <CommonSignPage
        heading={'Добро пожаловать!'}
        btnTxt={'Зарегистрироваться'}
        linkRoute={'/signin'}
        questionTxt={'Уже зарегистрированы?'}
        linkTxt={'Войти'}
        handleSubmit={handleSubmit(onSubmit)}
        inputs={
          <>
            <LoginInput
              labelTxt={'Имя'}
              register={register('name', inputConfig.name)}
              error={errors?.name && errors.name.message}
              type={'name'}
              errorBool={errors?.name}
            ></LoginInput>

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
    </div>
  );
};

export default Register;
