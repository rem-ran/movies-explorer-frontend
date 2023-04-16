// импорт компонентов
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

import './Main.css';

const Main = () => {
  return (
    <>
      <Header>
        <NavTab></NavTab>
      </Header>
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
