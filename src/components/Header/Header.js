// импорты
import { Link } from 'react-router-dom';
import headerLogo from '../../images/c-logo.svg';

//импорт стилей
import './Header.css';

// компонет хедера ////////////////////////////////////////////////////
const Header = ({
  coloredHeaderStyle,
  handleOpenMenu,
  links,
  mainPageClasses,
}) => {
  // начало JSX ////////////////////////////////////////////////////////////
  return (
    // coloredHeaderStyle меняет цвет хедера в зависимости где он вызван
    <header className={`header ${coloredHeaderStyle}`}>
      <div className="header__container">
        {/* при нажатии на лого переходим на основную страницу */}
        <Link to="/">
          <img
            className="header__logo"
            src={headerLogo}
            alt="логотип в виде буквы C"
          />
        </Link>
        <button
          // дополнительные классы кнопки для основной страницы
          className={`header__button-mobile ${mainPageClasses}`}
          onClick={handleOpenMenu}
        ></button>

        {/* для каждой страницы, где вызван хедер, линки нужно вставлять отдельно */}
        {links}
      </div>
    </header>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Header;
