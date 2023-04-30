// импорты
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

// импорт констант
import { popupLinks } from '../../utils/constants';

//импорт стилей
import './MenuPopup.css';

// компонет попа с меню ////////////////////////////////////////////////////
const MenuPopup = ({ isMenuClicked, handleOpenMenu }) => {
  // вешаем слушатель на зактрые модального окна по нажатию ESC клавиши
  useEffect(() => {
    const handleEscClose = (ev) => {
      if (ev.key === 'Escape') {
        ev.preventDefault();
        handleOpenMenu();
      }
    };

    // метод закрытия модального окна по клику вне модального окна
    const handleOutsideClickClose = (ev) => {
      if (ev.target.classList.contains('menu-popup')) {
        ev.preventDefault();
        handleOpenMenu();
      }
    };

    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('click', handleOutsideClickClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('click', handleOutsideClickClose);
    };
  }, []);
  return (
    // начало JSX ////////////////////////////////////////////////////////////
    <section
      className={`menu-popup ${isMenuClicked ? 'menu-popup_opened' : ''}`}
    >
      <div className="menu-popup__container">
        <div className="menu-popup__container-main">
          <button
            onClick={handleOpenMenu}
            className="menu-popup__close-btn"
          ></button>
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
