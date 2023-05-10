//импорт стилей
import './Preloader.css';

// компонент визуализации загрузки
const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

// экспорт //////////////////////////////////////////////////////
export default Preloader;
