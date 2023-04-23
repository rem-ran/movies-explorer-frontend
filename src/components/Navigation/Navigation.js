// импорты
import { NavLink } from 'react-router-dom';

// импорт констант
import { moviesHeaderLinks } from '../../utils/constants';

// импорт стилей
import './Navigation.css';

// компонент навигации на страницах с фильмами /////////////////////////
const Navigation = () => {
  return (
    <div className="nav__link-container nav__link-container_type_hidden">
      {moviesHeaderLinks.map((link, index) => (
        <NavLink key={index} to={link.route} className={link.styles}>
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Navigation;
