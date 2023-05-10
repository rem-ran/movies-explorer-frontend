// импорты
import { useEffect } from 'react';

// импорт стилей
import './InfoPopup.css';

// компонет информационного попапа /////////////////////////////////////
function InfoPopup({ setInfoPopupStatus, onClose, infoPopupMsg }) {
  //вешаем слушатель на зактрые модального окна по нажатию ESC клавиши
  useEffect(() => {
    const handleEscClose = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();

        onClose();
      }
    };

    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, []);

  /////////////////////////////////////////////////////////////////////////

  //метод закрытия модального окна по клику вне модального окна
  const handleOutsideClickClose = (e) => {
    if (e.target.classList.contains('popup_opened')) {
      onClose();
    }
  };

  // начало JSX ////////////////////////////////////////////////////////////
  return (
    <section
      className={`popup ${setInfoPopupStatus && 'popup_opened'} `}
      onClick={handleOutsideClickClose}
    >
      <div className="popup__container">
        <h2 className={`popup__heading`}>{infoPopupMsg}</h2>

        {/* кнопка закрытия попапа */}
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Close"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </section>
  );
}

// экспорт /////////////////////////////////////////////////////////////////
export default InfoPopup;
