// импорты
import { Link } from 'react-router-dom';

// импорт стилей
import './PageNotFound.css';

// компонент страницы "страницы не найдена" //////////////////////
const PageNotFound = () => {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__heading">404</h1>
        <p className="not-found__txt">Страница не найдена</p>
      </div>
      <Link to="/" className="not-found__link">
        Назад
      </Link>
    </section>
  );
};

// экспорт //////////////////////////////////////////////////////
export default PageNotFound;
