// стиль необходимый для смены цвета хедеру
export const coloredHeaderStyle = 'header_type_colored';

/////////////////////////////////////////////////////////////////////////

// константа адреса с фильмами
export const moviesUrl = 'https://api.nomoreparties.co/';

/////////////////////////////////////////////////////////////////////////

// константы сообщений
export const serverErrorMsg =
  'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

export const userUpdateOkMsg = 'Вы успешно обновили свои данные!';

export const nothingFoundMsg = 'Ничего не найдено';

/////////////////////////////////////////////////////////////////////////

export const shortMoviesFilterValue = 40;

/////////////////////////////////////////////////////////////////////////

//объект с нужными для работы с сервером данными
export const apiMainConfig = {
  // url: 'https://api.remran.nomoredomains.monster',
  url: 'http://localhost:3000',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
};

/////////////////////////////////////////////////////////////////////////

//объект с нужными для работы с сервером данными
export const apiMovieConfig = {
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
};

/////////////////////////////////////////////////////////////////////////

// стили необходимые для хедера на главной странице
const mainLink = 'header__link';
const mainLastLink = 'header__link_type_login';

// список необходимых ссылок для хедера на главной странице
export const mainHeaderLinks = [
  { route: '/signup', text: 'Регистрация', styles: mainLink },
  {
    route: '/signin',
    text: 'Войти',
    styles: `${mainLink} ${mainLastLink}`,
  },
];

/////////////////////////////////////////////////////////////////////////

// стили необходимые для хедера на страницах с фильмами
const moviesLink = 'nav__link';
const moviesLastLink = 'nav__link_type_account';

// список необходимых ссылок для хедера на страницах с фильмами
export const moviesHeaderLinks = [
  { route: '/movies', text: 'Фильмы', styles: moviesLink },
  { route: '/saved-movies', text: 'Сохранённые фильмы', styles: moviesLink },
  {
    route: '/profile',
    text: 'Аккаунт',
    styles: `${moviesLink} ${moviesLastLink}`,
  },
];

/////////////////////////////////////////////////////////////////////////

// стили необходимые для хедера на главной странице
const popupLink = 'menu-popup__link';

// список необходимых ссылок для хедера на главной странице
export const popupLinks = [
  { route: '/', text: 'Главная', styles: popupLink },
  { route: '/movies', text: 'Фильмы', styles: popupLink },
  { route: '/saved-movies', text: 'Сохранённые фильмы', styles: popupLink },
];

/////////////////////////////////////////////////////////////////////////

// список использованных в проекте технологий
export const techsList = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Git',
  'Express.js',
  'mongoDB',
];

/////////////////////////////////////////////////////////////////////////

// список работ портофолио
export const porfolioWebsites = [
  {
    heading: 'Статичный сайт',
    link: 'https://rem-ran.github.io/how-to-learn/',
  },
  {
    heading: 'Адаптивный сайт',
    link: 'https://rem-ran.github.io/russian-travel',
  },
  { heading: 'Одностраничное приложение', link: 'https://lenta.ru' },
];

/////////////////////////////////////////////////////////////////////////

// список ссылкок футеры
export const footerLinks = [
  {
    heading: 'Яндекс.Практикум',
    link: 'https://practicum.yandex.ru/',
  },
  {
    heading: 'Github',
    link: 'https://github.com/',
  },
];

/////////////////////////////////////////////////////////////////////////

//настройки зарегистрированных инпутов
export const inputConfig = {
  name: {
    required: 'Поле "Имя" обязательно к заполнению',
    minLength: { value: 2, message: 'Длина поля "Имя" минумум 2 символа' },
    maxLength: {
      value: 30,
      message: 'Длина поля "Имя" максимум 30 символов',
    },
    pattern: {
      value: /^[а-яa-z\s-]+$/im,
      message: 'Только латиница, кириллица, пробел или дефис',
    },
  },
  email: {
    required: 'Поле "E-mail" обязательно к заполнению',
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      message: 'Пожалуйста введите валидный email адрес',
    },
  },
  password: {
    required: 'Поле "Пароль" обязательно к заполнению',
    minLength: { value: 3, message: 'Длина поля "Пароль" минумум 3 символа' },
  },
};
