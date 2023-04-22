// импорт стилей
import './LoginInput.css';

// компонет импута для login/register ///////////////////////////////////
const LoginInput = ({ labelTxt, register, error, type, errorBool }) => {
  return (
    <div className="login-input">
      <label className="login-input__label">{labelTxt}</label>
      <input
        {...register}
        id={type}
        type={type}
        className={`login-input__input ${
          errorBool && 'login-input__input_error'
        }`}
      />
      <span className="login-input__error">{error}</span>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default LoginInput;
