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
            <h3 className="about-me__name">Виталий</h3>
            <h4 className="about-me__prof">Фронтенд-разработчик, 30 лет</h4>
            <p className="about-me__about">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь.
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
