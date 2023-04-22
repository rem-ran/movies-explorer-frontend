import { Link } from 'react-router-dom';
import headerLogo from '../../images/c-logo.svg';

import './Header.css';

const Header = ({ links, headerUserContainer, coloredHeaderStyle }) => {
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
        {links}
      </div>
      {headerUserContainer}
    </header>
  );
};

export default Header;
