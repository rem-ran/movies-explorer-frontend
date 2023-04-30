// импорт картинки
import arrowImg from '../../../images/arrowUp-icon.svg';

// импорт констант
import { porfolioWebsites } from '../../../utils/constants';

// импорт стилей
import './Portfolio.css';

// компонет портфолио //////////////////////////////////////////////////////
const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__container">
        <h5 className="portfolio__heading">Портфолио</h5>
        <ul className="portfolio__list">
          {porfolioWebsites.map((item, index) => (
            <li key={index} className="portfolio__list-item">
              <a
                className="portfolio__list-link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.heading}
                <img
                  className="portfolio__list-link-img"
                  src={arrowImg}
                  alt="чёрная стрелка вверх"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Portfolio;
