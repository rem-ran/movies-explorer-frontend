import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__heading">О проекте</h2>
        <div className="about__note-container">
          <div className="about__note-item">
            <p className="about__note-item-heading">
              Дипломный проект включал 5 этапов
            </p>
            <p className="about__note-item-text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about__note-item">
            <p className="about__note-item-heading">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="about__note-item-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about__indicators">
          <div className="about__indicator-one">
            <p className="about__indicator-one-heading">1 неделя</p>
            <p className="about__indicator-note">Back-end</p>
          </div>
          <div className="about__indicator-two">
            <p className="about__indicator-two-heading">4 недели</p>
            <p className="about__indicator-note">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
