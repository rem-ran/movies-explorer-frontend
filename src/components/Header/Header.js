// импорты
import { Link } from 'react-router-dom';
import headerLogo from '../../images/c-logo.svg';

//импорт стилей
import './Header.css';

// компонет хедера ////////////////////////////////////////////////////
const Header = ({
  coloredHeaderStyle,
  isMenuClicked,
  handleOpenMenu,
  isOpenMain,
  headerLinkList,
}) => {
  return (
    <header className={`header ${coloredHeaderStyle}`}>
      <div className="header__container">
        <Link to="/">
          <img
            className="header__logo"
            src={headerLogo}
            alt="логотип в виде буквы C"
          />
        </Link>
        {!isOpenMain && (
          <button
            className={`header__button-mobile ${
              isMenuClicked ? 'header__button-mobile_type_close' : ''
            }`}
            onClick={handleOpenMenu}
          ></button>
        )}
        <div
          className={`header__link-container ${
            isOpenMain ? '' : 'header__link-container_type_hidden'
          }`}
        >
          {headerLinkList.map((movie, index) => (
            <Link key={index} to={movie.route} className={movie.styles}>
              {movie.text}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Header;
