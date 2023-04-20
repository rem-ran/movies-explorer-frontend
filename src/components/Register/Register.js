import { useForm } from 'react-hook-form';
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
            {/* импут с именем /////////////////////////////////////////////////*/}
            <label className="sign__input-label">Name</label>
            <input
              {...register('name', inputConfig.name)}
              id="name"
              type="name"
              className="sign__input"
            />
            <span className={'sign__input-error'}>
              {errors?.name && errors.name.message}
            </span>

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

export default Register;
