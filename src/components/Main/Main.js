//импорты
import { NavLink } from 'react-router-dom';

// импорт компонент
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

// импорт констант
import { coloredHeaderStyle, mainHeaderLinks } from '../../utils/constants';

// импорт стилей
import './Main.css';

// компонет страницы с информацией о проекте и стенденте //////////////////////////
const Main = ({ isLoggenIn, isMenuClicked, handleOpenMenu }) => {
  return (
    // начало JSX ////////////////////////////////////////////////////////////////
    <div className="about">
      <Header
        isMenuClicked={isMenuClicked}
        isLoggenIn={isLoggenIn}
        handleOpenMenu={handleOpenMenu}
        coloredHeaderStyle={coloredHeaderStyle}
        // меняем стили для кнопки хедера на в зависимсоти от состояния авторизации
        mainPageClasses={
          !isLoggenIn
            ? 'header__button-mobile_invisible'
            : 'header__button-mobile_loggedin'
        }
        links={
          <div
            className={`about__link-container ${
              // убираем линки, если мы авторизированы
              isLoggenIn && 'about__link-container_type_hidden'
            }`}
          >
            {/* рендерим заранее подготовленные линки из константы */}
            {mainHeaderLinks.map((movie, index) => (
              <NavLink key={index} to={movie.route} className={movie.styles}>
                {movie.text}
              </NavLink>
            ))}
          </div>
        }
      ></Header>
      <main>
        <Promo></Promo>
        <AboutProject></AboutProject>
        <Techs></Techs>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Main;
