// импорты
import { useForm } from 'react-hook-form';

//импорт компонент
import LoginInput from '../LoginInput/LoginInput';
import CommonSignPage from '../CommonSignPage/CommonSignPage';

//импорт констант
import { inputConfig } from '../../utils/constants';

//импорт стилей
import './Register.css';
import '../CommonSignPage/CommonSignPage.css';

// компонет регистрации //////////////////////////////////////////////////////
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

  // метод обработки сабмита формы
  const onSubmit = (inputData) => {
    handleUserSignUp(inputData);
    reset();
  };

  // начало JSX ////////////////////////////////////////////////////////////
  return (
    <div>
      <CommonSignPage
        heading={'Добро пожаловать!'}
        btnTxt={'Зарегистрироваться'}
        linkRoute={'/signin'}
        questionTxt={'Уже зарегистрированы?'}
        linkTxt={'Войти'}
        handleSubmit={handleSubmit(onSubmit)}
        buttonDisabled={
          (errors?.name || errors?.email || errors?.password) &&
          'sign__submit-btn_disabled'
        }
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

// экспорт //////////////////////////////////////////////////////
export default Register;
