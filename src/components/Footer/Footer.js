import { footerLinks } from '../../utils/constants';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h6 className="footer__heading">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h6>
        <div class="footer__lower-part">
          <p class="footer__year">&copy; 2023</p>
          <ul class="footer__links">
            {footerLinks.map((item, index) => (
              <li key={index} class="footer__list-item">
                <a
                  href={item.link}
                  class="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.heading}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
