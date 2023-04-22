//импорты
import { Link } from 'react-router-dom';

// импорт компонент
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

//импорт стилей
import './Main.css';

// компонет страницы с информацией о проекте и стенденте //////////////////////////
const Main = () => {
  return (
    <>
      <Header
        links={
          <div className="header__user-container">
            <Link to="/signup" className="header__link">
              Регистрация
            </Link>
            <Link to="/signin" className="header__link header__link_type_login">
              Войти
            </Link>
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

// экспорт //////////////////////////////////////////////////////
export default Main;
