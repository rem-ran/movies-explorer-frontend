//импорты

// импорт компонент
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

// импорт констант
import { coloredHeaderStyle, headerMainLinks } from '../../utils/constants';

// импорт стилей
import './Main.css';
import { useEffect } from 'react';

// компонет страницы с информацией о проекте и стенденте //////////////////////////
const Main = ({ isMainOpen, setIsMainOpen }) => {
  const handleOpenMain = () => {
    setIsMainOpen(true);
  };

  useEffect(() => {
    handleOpenMain();
    console.log(isMainOpen);
  });
  return (
    <>
      <Header
        headerLinkList={headerMainLinks}
        isMainOpen={isMainOpen}
        coloredHeaderStyle={coloredHeaderStyle}
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
