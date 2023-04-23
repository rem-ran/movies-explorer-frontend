// импорт стилей
import './Promo.css';

// импорт констант
import promoImage from '../../../images/planet-logo.svg';

// компонет промо //////////////////////////////////////////////////////
const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__text">
          <h1 className="promo__heading">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <span className="promo__note">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </span>
          <a className="promo__link" href="#portfolio">
            Узнать больше
          </a>
        </div>
        <img
          className="promo__img"
          src={promoImage}
          alt="Лого в виде планеты из слов WEB"
        />
      </div>
    </section>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Promo;
