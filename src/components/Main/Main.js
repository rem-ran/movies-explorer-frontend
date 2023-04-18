import { Link } from 'react-router-dom';

// импорт компонентов
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

import './Main.css';

const Main = () => {
  return (
    <>
      <Header
        links={
          // <Link to="/sign-up" className="header__link">
          //   Регистрация
          // </Link>
          <div className="header__user-container">
            <span className="header__link">Регистрация</span>
            <span className="header__link">Войти</span>
          </div>
        }
      ></Header>
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Techs></Techs>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </>
  );
};

export default Main;
