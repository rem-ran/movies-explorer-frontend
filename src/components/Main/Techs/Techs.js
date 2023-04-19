import { techsList } from '../../../utils/constants';

import './Techs.css';

const Techs = () => {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__heading">Технологии</h2>
        <div className="techs__text-container">
          <h3 className="techs__sub-heading">7 технологий</h3>
          <p className="techs__text">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="techs__used-technologies">
          {techsList.map((item, index) => (
            <li key={index} className="techs__used-technologie">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Techs;
