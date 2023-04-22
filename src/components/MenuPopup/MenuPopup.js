//импорты
import { Link, NavLink } from 'react-router-dom';

import { popupLinks } from '../../utils/constants';

//импорт стилей
import './MenuPopup.css';

// компонет попа с меню ////////////////////////////////////////////////////
const MenuPopup = ({ isMenuClicked, handleOpenMenu }) => {
  return (
    <section
      className={`menu-popup ${isMenuClicked ? 'menu-popup_opened' : ''}`}
    >
      <div className="menu-popup__container">
        <div className="menu-popup__container-main">
          {popupLinks.map((movie, index) => (
            <NavLink
              key={index}
              to={movie.route}
              className={movie.styles}
              onClick={handleOpenMenu}
            >
              {movie.text}
            </NavLink>
          ))}
        </div>
        <div className="menu-popup__container-acc">
          <Link
            onClick={handleOpenMenu}
            to="/profile"
            className="menu-popup__link menu-popup__link_type_account"
          >
            Аккаунт
          </Link>
        </div>
      </div>
    </section>
  );
};

// экспорт //////////////////////////////////////////////////////
export default MenuPopup;
