export const techsList = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Git',
  'Express.js',
  'mongoDB',
];

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

//настройки зарегистрированных инпутов
export const inputConfig = {
  name: {
    required: 'Поле "Имя" обязательно к заполнению',
    minLength: { value: 2, message: 'Длина поля "Имя" минумум 2 символа' },
    maxLength: {
      value: 30,
      message: 'Длина поля "Имя" максимум 30 символов',
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
