import './Header.css';

import headerLogo from '../../images/c-logo.svg';

const Header = ({ links, headerUserContainer }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <img
            className="header__logo"
            src={headerLogo}
            alt="логотип в виде буквы C"
          />
          {links}
        </div>
        {headerUserContainer}
      </div>
    </header>
  );
};

export default Header;
