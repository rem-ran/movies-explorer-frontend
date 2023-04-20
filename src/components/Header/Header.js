import { Link } from 'react-router-dom';
import headerLogo from '../../images/c-logo.svg';

import './Header.css';

const Header = ({ links, headerUserContainer }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <Link to="/">
            <img
              className="header__logo"
              src={headerLogo}
              alt="логотип в виде буквы C"
            />
          </Link>
          {links}
        </div>
        {headerUserContainer}
      </div>
    </header>
  );
};

export default Header;
