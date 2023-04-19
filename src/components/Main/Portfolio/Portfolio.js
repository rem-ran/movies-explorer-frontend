import arrowImg from '../../../images/arrowUp-icon.svg';
import { porfolioWebsites } from '../../../utils/constants';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__container">
        <h5 className="portfolio__heading">Портфолио</h5>
        <ul className="portfolio__list">
          {porfolioWebsites.map((item, index) => (
            <li key={index} className="portfolio__list-item">
              {item.heading}
              <a
                className="portfolio__list-link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
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

export default Portfolio;
