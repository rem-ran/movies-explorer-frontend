//импорты
import { Link } from 'react-router-dom';

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
          <Link onClick={handleOpenMenu} to="/" className="menu-popup__link">
            Главная
          </Link>
          <Link
            onClick={handleOpenMenu}
            to="/movies"
            className="menu-popup__link"
          >
            Фильмы
          </Link>
          <Link
            onClick={handleOpenMenu}
            to="/saved-movies"
            className="menu-popup__link"
          >
            Сохранённые фильмы
          </Link>
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
