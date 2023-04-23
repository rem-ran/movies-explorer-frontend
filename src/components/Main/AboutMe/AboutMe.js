// импорт картинки
import profileImg from '../../../images/my-profile-photo.jpg';

// импорт стилей
import './AboutMe.css';

// компонет описания себя //////////////////////////////////////////////////////
const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__heading">Студент</h2>
        <div className="about-me__content">
          <div className="about-me__text">
            <h3 className="about-me__name">Руслан</h3>
            <h4 className="about-me__prof">Фронтенд-разработчик, 33 года</h4>
            <p className="about-me__about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              aliquam luctus risus, vitae commodo libero. Proin tincidunt orci
              at leo finibus faucibus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed eu consequat risus. Suspendisse sed felis
              scelerisque, porta diam et, sollicitudin nunc. Donec vitae lacus
              sit amet urna malesuada sagittis ac eget enim.
            </p>
            <a
              className="about-me__link"
              href="https://github.com/rem-ran?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <img
            className="about-me__img"
            src={profileImg}
            alt="Фотография студента"
          />
        </div>
      </div>
    </section>
  );
};

// экспорт //////////////////////////////////////////////////////
export default AboutMe;
