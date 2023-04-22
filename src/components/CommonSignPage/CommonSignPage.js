// импорты
import { Link } from 'react-router-dom';

import commonSignLogo from '../../images/c-logo.svg';

//импорт стилей
import './CommonSignPage.css';

// компонет для login/register //////////////////////////////////////////////////////
const CommonSignPage = ({
  heading,
  btnTxt,
  handleSubmit,
  linkRoute,
  questionTxt,
  linkTxt,
  inputs,
  buttonDisabled,
}) => {
  // начало JSX ////////////////////////////////////////////////////////////////
  return (
    <div className="sign sign__container">
      {/* лого с заголовком /////////////////////////////////////////////////*/}
      <img
        className="sign__logo"
        src={commonSignLogo}
        alt="логотип в виде буквы C"
      />
      <h2 className="sign__heading">{heading}</h2>

      {/* начало формы ///////////////////////////////////////////////////////*/}
      <form onSubmit={handleSubmit} className="sign__form">
        {/* импуты ///////////////////////////////////////////////////////////*/}
        <div className="sign__input-box">{inputs}</div>

        {/* кнопка, вопрос и линк ///////////////////////////////////////////*/}
        <div className="sign__btn-box">
          <button
            onClick={handleSubmit}
            className={`sign__submit-btn ${buttonDisabled}`}
          >
            {btnTxt}
          </button>
          <div className="sign__question-box">
            <p className="sign__question">{questionTxt}</p>
            <Link to={linkRoute} className="sign__link">
              {linkTxt}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default CommonSignPage;
