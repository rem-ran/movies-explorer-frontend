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
import Navigation from '../Navigation/Navigation';

// импорт констант
import { coloredHeaderStyle, mainHeaderLinks } from '../../utils/constants';

// импорт стилей
import './Main.css';

// компонет страницы с информацией о проекте и стенденте //////////////////////////
const Main = ({ isLoggenIn, isMenuClicked, handleOpenMenu }) => {
  return (
    // начало JSX ////////////////////////////////////////////////////////////////
    <div className="main">
      <Header
        isMenuClicked={isMenuClicked}
        isLoggenIn={isLoggenIn}
        handleOpenMenu={handleOpenMenu}
        coloredHeaderStyle={coloredHeaderStyle}
        // если пользователь не авторизирован, то кнопку меню полностью скрываем
        // стилем "header__button-mobile_invisible"
        mainPageClasses={!isLoggenIn && 'header__button-mobile_invisible'}
        links={
          isLoggenIn ? (
            // если пользователь авторизирован, то показываем линки навигации по странице
            <Navigation></Navigation>
          ) : (
            // если пользователь не авторизирован, то показываем линки
            // регистрации и авторизации
            <div className={`header__link-container`}>
              {/* рендерим заранее подготовленные линки из константы "mainHeaderLinks" */}
              {mainHeaderLinks.map((movie, index) => (
                <NavLink key={index} to={movie.route} className={movie.styles}>
                  {movie.text}
                </NavLink>
              ))}
            </div>
          )
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
