// стиль необходимый для смены цвета хедеру
export const coloredHeaderStyle = 'header_type_colored';

/////////////////////////////////////////////////////////////////////////

// стили необходимые для хедера на главной странице
const mainLink = 'header__link';
const mainLastLink = 'header__link_type_login';

// список необходимых ссылок для хедера на главной странице
export const headerMainLinks = [
  { route: '/signup', text: 'Регистрация', styles: mainLink },
  {
    route: '/signin',
    text: 'Войти',
    styles: `${mainLink} ${mainLastLink}`,
  },
];

/////////////////////////////////////////////////////////////////////////

// стили необходимые для хедера на страницах с фильмами
const moviesLink = 'movies__link';
const moviesLastLink = 'movies__link_type_account';

// список необходимых ссылок для хедера на страницах с фильмами
export const headerMoviesLinks = [
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

/////////////////////////////////////////////////////////////////////////

// для примера работы с карточками
export const movieCards = [
  {
    id: 1,
    nameRU: '«Роллинг Стоунз» в изгнании',
    nameEN: 'Stones in Exile',
    director: 'Стивен Кайак ',
    country: 'США',
    year: '2010',
    duration: 61,
    description:
      'В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы.',
    trailerLink: 'https://www.youtube.com/watch?v=UXcqcdYABFw',
    created_at: '2020-11-23T14:12:21.376Z',
    updated_at: '2020-11-23T14:12:21.376Z',
    image: {
      url: 'https://www.rockfm.ru/uploads/photos/1/2020/12/Rolling-Stones.jpg',
    },
  },
  {
    id: 2,
    nameRU: "All Tomorrow's Parties",
    nameEN: "All Tomorrow's Parties",
    director: ' Джонатан Кауэтт',
    country: 'Великобритания',
    year: '2009',
    duration: 82,
    description:
      'Хроники британского фестиваля, который первым нарушил монополию «Гластонбери», «Ридинга» и прочих пивных сборищ в чистом поле — и с тех пор прослыл одним из самых независимых и принципиальных. ATP из года в год проходит на базе отдыха в английской глуши, где артисты и их поклонники живут в одинаковых номерах, не бывает коммерческих спонсоров, программу составляют приглашенные кураторы (в разное время ими были Ник Кейв, Belle & Sebastian, Sonic Youth и даже Мэтт Грейнинг). И, главное, где не любят вздорных людей — основатель фестиваля Барри Хоган однажды сказал, что никогда больше не станет иметь дело с группой Killing Joke, «потому что они му...аки». Эта демократичность сказалась и на фильме: часть съемок сделана адептами фестиваля на мобильный телефон.',
    trailerLink: 'https://www.youtube.com/watch?v=D5fBhbEJxEU',
    created_at: '2020-11-23T14:15:19.238Z',
    updated_at: '2020-11-23T14:15:19.238Z',
    image: { url: 'https://rockology.ru/audio/12/Nico/LB/6607.jpg' },
  },
  {
    id: 3,
    nameRU: 'Без обратного пути',
    nameEN: 'No Distance Left to Run',
    director: 'Уилл Лавлейс, Дилан Сотерн',
    country: 'Великобритания',
    year: '2010',
    duration: 104,
    description:
      'Затеянный по такому подозрительному поводу, как реюнион Blur в 2009-м году фильм начисто лишен присущего моменту пафоса и выхолощенности речей. Вернее, что-то похожее неизбежно возникает, когда ты видишь, как забитый до отказа Гайд-парк как в последний раз ревет «Song 2», но это лишь буквальное свидетельство того, что Blur — великая группа. К счастью, помимо прямых и косвенных свидетельств этого, в «No Distance Left to Run» хватает острых углов, неловких моментов и всего того сора, из которого рождаются по-настоящему отличные группы: помимо важных, но общеизвестных моментов (вроде соперничества с Oasis за первенство в том же бритпопе) визуализируются и те, что всегда оставались за кадром: наркотическая зависимость, неутихающие костры амбиций, ревность, обиды, слава — и все это блестяще снято на фоне истории того, что вообще происходило в Британии времен Блэра.',
    trailerLink: 'https://www.youtube.com/watch?v=6iYxdghpJZY',
    created_at: '2020-11-23T14:17:23.257Z',
    updated_at: '2020-11-23T14:17:23.257Z',
    image: {
      url: 'https://images.kinorium.com/movie/shot/514152/w1500_662061.jpg',
    },
  },
  {
    id: 4,
    nameRU: 'Bassweight',
    nameEN: 'Bassweight',
    director: 'Сурид Хассан',
    country: 'Великобритания',
    year: '2008',
    duration: 61,
    description:
      'Фильм про самую многообещающую музыкальную субкультуру нулевых использует тот же ассоциативный ряд, что и искомая музыка: низкое, затянутое облаками небо южного Лондона, приглушенный свет, массивный бас, удары которого отдаются в грудной клетке, негромкая речь людей, предпочитающих не показывать свои лица. Впрочем, все ключевые для дабстепа люди здесь, конечно, имеются — Бенга, Скрим, Kode 9, Мэри Энн Хоббс и прочие, а география не сводится к одному только Кройдону — следом за исторической родиной дабстепа режиссер фильма исследует и другие очаги возгорания, включая Бразилию и Японию.',
    trailerLink: 'https://www.youtube.com/watch?v=dgSyC6me-jQ',
    created_at: '2020-12-02T16:48:01.794Z',
    updated_at: '2020-12-02T16:48:01.794Z',
    image: { url: 'https://i.ytimg.com/vi/k0nkkOqcwpo/maxresdefault.jpg' },
  },
  {
    id: 5,
    nameRU: 'Taqwacore: The Birth of Punk Islam',
    nameEN: 'Taqwacore: The Birth of Punk Islam',
    director: ' Омар Маджид',
    country: 'Канада',
    year: '2009',
    duration: 80,
    description:
      'Пакистанские лесбиянки из Ванкувера, арабские хеви-металлисты из Чикаго, группа Vote Hezbollah, ведомая иранцем из Сан-Антонио, — все это невымышленные, сплошь настоящие персонажи, запечатленные в первом документальном свидетельстве о субкультуре исламского панка. Хотя до недавнего времени исламский панк, он же taqwacore, был художественным вымыслом, вышедшим из-под пера писателя-мусульманина Майкла Мухаммеда Найта, его книга сделала это явление вполне реальным, тогда как сам он стал главным героем фильма.',
    trailerLink: 'https://www.youtube.com/watch?v=JMZ8DO9F4Mo',
    created_at: '2020-12-02T20:35:14.745Z',
    updated_at: '2020-12-02T20:35:14.745Z',
    image: {
      url: 'https://www.ultimate-guitar.com/static/article/news/6/129046_0_meta_ver1647887064.jpg',
    },
  },
  {
    id: 6,
    nameRU: '«Роллинг Стоунз» в изгнании',
    nameEN: 'Stones in Exile',
    director: 'Стивен Кайак ',
    country: 'США',
    year: '2010',
    duration: 61,
    description:
      'В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы.',
    trailerLink: 'https://www.youtube.com/watch?v=UXcqcdYABFw',
    created_at: '2020-11-23T14:12:21.376Z',
    updated_at: '2020-11-23T14:12:21.376Z',
    image: {
      url: 'https://www.rockfm.ru/uploads/photos/1/2020/12/Rolling-Stones.jpg',
    },
  },
  {
    id: 7,
    nameRU: "All Tomorrow's Parties",
    nameEN: "All Tomorrow's Parties",
    director: ' Джонатан Кауэтт',
    country: 'Великобритания',
    year: '2009',
    duration: 82,
    description:
      'Хроники британского фестиваля, который первым нарушил монополию «Гластонбери», «Ридинга» и прочих пивных сборищ в чистом поле — и с тех пор прослыл одним из самых независимых и принципиальных. ATP из года в год проходит на базе отдыха в английской глуши, где артисты и их поклонники живут в одинаковых номерах, не бывает коммерческих спонсоров, программу составляют приглашенные кураторы (в разное время ими были Ник Кейв, Belle & Sebastian, Sonic Youth и даже Мэтт Грейнинг). И, главное, где не любят вздорных людей — основатель фестиваля Барри Хоган однажды сказал, что никогда больше не станет иметь дело с группой Killing Joke, «потому что они му...аки». Эта демократичность сказалась и на фильме: часть съемок сделана адептами фестиваля на мобильный телефон.',
    trailerLink: 'https://www.youtube.com/watch?v=D5fBhbEJxEU',
    created_at: '2020-11-23T14:15:19.238Z',
    updated_at: '2020-11-23T14:15:19.238Z',
    image: { url: 'https://rockology.ru/audio/12/Nico/LB/6607.jpg' },
  },
  {
    id: 8,
    nameRU: 'Без обратного пути',
    nameEN: 'No Distance Left to Run',
    director: 'Уилл Лавлейс, Дилан Сотерн',
    country: 'Великобритания',
    year: '2010',
    duration: 104,
    description:
      'Затеянный по такому подозрительному поводу, как реюнион Blur в 2009-м году фильм начисто лишен присущего моменту пафоса и выхолощенности речей. Вернее, что-то похожее неизбежно возникает, когда ты видишь, как забитый до отказа Гайд-парк как в последний раз ревет «Song 2», но это лишь буквальное свидетельство того, что Blur — великая группа. К счастью, помимо прямых и косвенных свидетельств этого, в «No Distance Left to Run» хватает острых углов, неловких моментов и всего того сора, из которого рождаются по-настоящему отличные группы: помимо важных, но общеизвестных моментов (вроде соперничества с Oasis за первенство в том же бритпопе) визуализируются и те, что всегда оставались за кадром: наркотическая зависимость, неутихающие костры амбиций, ревность, обиды, слава — и все это блестяще снято на фоне истории того, что вообще происходило в Британии времен Блэра.',
    trailerLink: 'https://www.youtube.com/watch?v=6iYxdghpJZY',
    created_at: '2020-11-23T14:17:23.257Z',
    updated_at: '2020-11-23T14:17:23.257Z',
    image: {
      url: 'https://images.kinorium.com/movie/shot/514152/w1500_662061.jpg',
    },
  },
  {
    id: 9,
    nameRU: 'Bassweight',
    nameEN: 'Bassweight',
    director: 'Сурид Хассан',
    country: 'Великобритания',
    year: '2008',
    duration: 61,
    description:
      'Фильм про самую многообещающую музыкальную субкультуру нулевых использует тот же ассоциативный ряд, что и искомая музыка: низкое, затянутое облаками небо южного Лондона, приглушенный свет, массивный бас, удары которого отдаются в грудной клетке, негромкая речь людей, предпочитающих не показывать свои лица. Впрочем, все ключевые для дабстепа люди здесь, конечно, имеются — Бенга, Скрим, Kode 9, Мэри Энн Хоббс и прочие, а география не сводится к одному только Кройдону — следом за исторической родиной дабстепа режиссер фильма исследует и другие очаги возгорания, включая Бразилию и Японию.',
    trailerLink: 'https://www.youtube.com/watch?v=dgSyC6me-jQ',
    created_at: '2020-12-02T16:48:01.794Z',
    updated_at: '2020-12-02T16:48:01.794Z',
    image: { url: 'https://i.ytimg.com/vi/k0nkkOqcwpo/maxresdefault.jpg' },
  },
  {
    id: 10,
    nameRU: 'Taqwacore: The Birth of Punk Islam',
    nameEN: 'Taqwacore: The Birth of Punk Islam',
    director: ' Омар Маджид',
    country: 'Канада',
    year: '2009',
    duration: 80,
    description:
      'Пакистанские лесбиянки из Ванкувера, арабские хеви-металлисты из Чикаго, группа Vote Hezbollah, ведомая иранцем из Сан-Антонио, — все это невымышленные, сплошь настоящие персонажи, запечатленные в первом документальном свидетельстве о субкультуре исламского панка. Хотя до недавнего времени исламский панк, он же taqwacore, был художественным вымыслом, вышедшим из-под пера писателя-мусульманина Майкла Мухаммеда Найта, его книга сделала это явление вполне реальным, тогда как сам он стал главным героем фильма.',
    trailerLink: 'https://www.youtube.com/watch?v=JMZ8DO9F4Mo',
    created_at: '2020-12-02T20:35:14.745Z',
    updated_at: '2020-12-02T20:35:14.745Z',
    image: {
      url: 'https://www.ultimate-guitar.com/static/article/news/6/129046_0_meta_ver1647887064.jpg',
    },
  },
  {
    id: 11,
    nameRU: '«Роллинг Стоунз» в изгнании',
    nameEN: 'Stones in Exile',
    director: 'Стивен Кайак ',
    country: 'США',
    year: '2010',
    duration: 61,
    description:
      'В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы.',
    trailerLink: 'https://www.youtube.com/watch?v=UXcqcdYABFw',
    created_at: '2020-11-23T14:12:21.376Z',
    updated_at: '2020-11-23T14:12:21.376Z',
    image: {
      url: 'https://www.rockfm.ru/uploads/photos/1/2020/12/Rolling-Stones.jpg',
    },
  },
  {
    id: 12,
    nameRU: "All Tomorrow's Parties",
    nameEN: "All Tomorrow's Parties",
    director: ' Джонатан Кауэтт',
    country: 'Великобритания',
    year: '2009',
    duration: 82,
    description:
      'Хроники британского фестиваля, который первым нарушил монополию «Гластонбери», «Ридинга» и прочих пивных сборищ в чистом поле — и с тех пор прослыл одним из самых независимых и принципиальных. ATP из года в год проходит на базе отдыха в английской глуши, где артисты и их поклонники живут в одинаковых номерах, не бывает коммерческих спонсоров, программу составляют приглашенные кураторы (в разное время ими были Ник Кейв, Belle & Sebastian, Sonic Youth и даже Мэтт Грейнинг). И, главное, где не любят вздорных людей — основатель фестиваля Барри Хоган однажды сказал, что никогда больше не станет иметь дело с группой Killing Joke, «потому что они му...аки». Эта демократичность сказалась и на фильме: часть съемок сделана адептами фестиваля на мобильный телефон.',
    trailerLink: 'https://www.youtube.com/watch?v=D5fBhbEJxEU',
    created_at: '2020-11-23T14:15:19.238Z',
    updated_at: '2020-11-23T14:15:19.238Z',
    image: { url: 'https://rockology.ru/audio/12/Nico/LB/6607.jpg' },
  },
  {
    id: 13,
    nameRU: 'Без обратного пути',
    nameEN: 'No Distance Left to Run',
    director: 'Уилл Лавлейс, Дилан Сотерн',
    country: 'Великобритания',
    year: '2010',
    duration: 104,
    description:
      'Затеянный по такому подозрительному поводу, как реюнион Blur в 2009-м году фильм начисто лишен присущего моменту пафоса и выхолощенности речей. Вернее, что-то похожее неизбежно возникает, когда ты видишь, как забитый до отказа Гайд-парк как в последний раз ревет «Song 2», но это лишь буквальное свидетельство того, что Blur — великая группа. К счастью, помимо прямых и косвенных свидетельств этого, в «No Distance Left to Run» хватает острых углов, неловких моментов и всего того сора, из которого рождаются по-настоящему отличные группы: помимо важных, но общеизвестных моментов (вроде соперничества с Oasis за первенство в том же бритпопе) визуализируются и те, что всегда оставались за кадром: наркотическая зависимость, неутихающие костры амбиций, ревность, обиды, слава — и все это блестяще снято на фоне истории того, что вообще происходило в Британии времен Блэра.',
    trailerLink: 'https://www.youtube.com/watch?v=6iYxdghpJZY',
    created_at: '2020-11-23T14:17:23.257Z',
    updated_at: '2020-11-23T14:17:23.257Z',
    image: {
      url: 'https://images.kinorium.com/movie/shot/514152/w1500_662061.jpg',
    },
  },
  {
    id: 14,
    nameRU: 'Bassweight',
    nameEN: 'Bassweight',
    director: 'Сурид Хассан',
    country: 'Великобритания',
    year: '2008',
    duration: 61,
    description:
      'Фильм про самую многообещающую музыкальную субкультуру нулевых использует тот же ассоциативный ряд, что и искомая музыка: низкое, затянутое облаками небо южного Лондона, приглушенный свет, массивный бас, удары которого отдаются в грудной клетке, негромкая речь людей, предпочитающих не показывать свои лица. Впрочем, все ключевые для дабстепа люди здесь, конечно, имеются — Бенга, Скрим, Kode 9, Мэри Энн Хоббс и прочие, а география не сводится к одному только Кройдону — следом за исторической родиной дабстепа режиссер фильма исследует и другие очаги возгорания, включая Бразилию и Японию.',
    trailerLink: 'https://www.youtube.com/watch?v=dgSyC6me-jQ',
    created_at: '2020-12-02T16:48:01.794Z',
    updated_at: '2020-12-02T16:48:01.794Z',
    image: { url: 'https://i.ytimg.com/vi/k0nkkOqcwpo/maxresdefault.jpg' },
  },
  {
    id: 15,
    nameRU: 'Taqwacore: The Birth of Punk Islam',
    nameEN: 'Taqwacore: The Birth of Punk Islam',
    director: ' Омар Маджид',
    country: 'Канада',
    year: '2009',
    duration: 80,
    description:
      'Пакистанские лесбиянки из Ванкувера, арабские хеви-металлисты из Чикаго, группа Vote Hezbollah, ведомая иранцем из Сан-Антонио, — все это невымышленные, сплошь настоящие персонажи, запечатленные в первом документальном свидетельстве о субкультуре исламского панка. Хотя до недавнего времени исламский панк, он же taqwacore, был художественным вымыслом, вышедшим из-под пера писателя-мусульманина Майкла Мухаммеда Найта, его книга сделала это явление вполне реальным, тогда как сам он стал главным героем фильма.',
    trailerLink: 'https://www.youtube.com/watch?v=JMZ8DO9F4Mo',
    created_at: '2020-12-02T20:35:14.745Z',
    updated_at: '2020-12-02T20:35:14.745Z',
    image: {
      url: 'https://www.ultimate-guitar.com/static/article/news/6/129046_0_meta_ver1647887064.jpg',
    },
  },
];
