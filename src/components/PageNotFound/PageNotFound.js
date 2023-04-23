import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__heading">404</h1>
        <p className="not-found__txt">Страница не найдена</p>
        <Link to="/" className="not-found__link">
          Назад
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
