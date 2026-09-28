// Generate static service pages from the approved facts already visible on the homepage.
// Keep unknown booking terms out of the copy until Anna confirms them.
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';

const origin = 'https://annafinkphoto.ru';
const contact = [
  ['Telegram', 'https://t.me/Anna_Fink'],
  ['VK', 'https://vk.com/anna_fink'],
  ['MAX', 'https://max.ru/u/f9LHodD0cOLPNGGr6jpI33K1cuUN0E16P-s9kA3HxnDV8fCt2W4wYKjlsNY'],
];
const pages = [
  {
    slug: 'zhenskaya-fotosessiya', name: 'Женская фотосессия', title: 'Женская фотосессия в Хабаровске',
    description: 'Женская фотосессия в Хабаровске у Анны Финк: помощь с образом и позированием, час съёмки. Пакеты на 15 и 20 портретов, примеры работ и запись.',
    intro: 'Портрет, в котором можно быть разной: спокойной, смелой, нежной или решительной. Я помогу выбрать образ и локацию, подскажу движения и оставлю место для твоего собственного характера.',
    facts: ['1 час съёмки', 'Помощь с позированием', 'Пакеты от 6000 ₽'],
    hero: 'portrait-women/IMG_4577.webp',
    gallery: [
      ['IMG_0305.webp', 'Женский портрет в спокойном тёмном образе'],
      ['IMG_2589.webp', 'Портрет в тёплом свете'],
      ['IMG_4270.webp', 'Женский портрет на открытом воздухе'],
      ['IMG_4577.webp', 'Портрет с цветами в тёплом свете'],
      ['IMG_7178.webp', 'Крупный женский портрет с цветами'],
      ['IMG_7632.webp', 'Женский портрет у стены'],
    ], folder: 'portrait-women',
    galleryIntro: 'В этих кадрах нет требования быть моделью. Важнее взгляд, настроение и то, как ты хочешь увидеть себя.',
    steps: [
      ['Обсуждаем идею', 'Расскажи, какой ты хочешь увидеть себя на фотографиях. Подберём образ и локацию под настроение съёмки.'],
      ['Снимаем спокойно', 'Я веду съёмку и помогаю с позированием. Ничего не нужно уметь заранее.'],
      ['Отбираю кадры', 'В каждом пакете есть фотографии в лёгкой ретуши и выбранные портреты в детальной ретуши, если она требуется.'],
    ],
    offers: [
      ['Топ 15', 6000, '15 фото в детальной ретуши, если требуется, и не менее 20 фото в лёгкой ретуши.'],
      ['Топ 20', 7500, '20 фото в детальной ретуши, если требуется, и не менее 20 фото в лёгкой ретуши.'],
    ],
    faqs: [
      ['Нужно ли уметь позировать?', 'Нет. Во время съёмки я показываю и подсказываю движения.'],
      ['Поможете выбрать образ и место?', 'Да. Помощь в подборе образа и локации входит в съёмку.'],
      ['Сколько длится съёмка?', 'Оба пакета включают один час съёмки.'],
    ],
  },
  {
    slug: 'semeynaya-fotosessiya', name: 'Семейная съёмка', title: 'Семейная фотосессия в Хабаровске',
    description: 'Семейная фотосессия в Хабаровске у Анны Финк: час съёмки, помощь с образом и локацией, 15 фото в детальной и не менее 30 в лёгкой ретуши.',
    intro: 'Семейная история про близость, движение и живые эмоции. В кадре важны отношения между вами, а не идеально выстроенные позы. Подберём место и образ, в которых семье будет комфортно.',
    facts: ['1 час съёмки', 'Двое взрослых и дети', '7000 ₽'],
    hero: 'family/IMG_2290.webp',
    gallery: [
      ['IMG_1867.webp', 'Пара во время семейной прогулки'],
      ['IMG_1986.webp', 'Родители с ребёнком на природе'],
      ['IMG_2212.webp', 'Мама и ребёнок обнимаются'],
      ['IMG_2290.webp', 'Семейный портрет родителей с ребёнком'],
      ['IMG_2535.webp', 'Пара в осеннем пейзаже'],
      ['IMG_2794.webp', 'Пара на прогулке среди деревьев'],
    ], folder: 'family',
    galleryIntro: 'В подборке есть семейные портреты и кадры вдвоём. Каждый сюжет строится вокруг людей, которые пришли на съёмку.',
    steps: [
      ['Планируем вместе', 'Обсуждаем состав семьи, образ и локацию.'],
      ['Снимаем без спешки', 'В течение часа я помогаю с позированием и снимаю живые моменты.'],
      ['Готовлю фотографии', 'Пакет включает 15 фото в детальной ретуши, если требуется, и не менее 30 в лёгкой ретуши.'],
    ],
    offers: [['Семейная съёмка', 7000, 'Цена за двух взрослых и детей. Если взрослых больше, стоимость обсуждается отдельно.']],
    faqs: [
      ['Сколько человек входит в стоимость?', 'Указанная цена действует для двух взрослых и детей. Если взрослых больше, напишите мне, и обсудим стоимость.'],
      ['Поможете выбрать место и одежду?', 'Да. В пакет входит помощь с подбором образа и локации.'],
      ['Сколько фотографий мы получим?', '15 фото в детальной ретуши, если она требуется, и не менее 30 фото в лёгкой ретуши.'],
    ],
  },
  {
    slug: 'fotosessiya-beremennosti', name: 'Съёмка беременности', title: 'Фотосессия беременности в Хабаровске',
    description: 'Фотосессия беременности в Хабаровске у Анны Финк: бережная съёмка на один час, помощь с образом и локацией, пакет за 6000 ₽ и примеры портретов.',
    intro: 'Бережная съёмка о времени ожидания. Можно выбрать мягкий домашний свет, студийный образ или природное пространство — обсудим, что ближе тебе, и подберём подходящее место.',
    facts: ['1 час съёмки', 'Помощь с образом', '6000 ₽'],
    hero: 'pregnancy/IMG_5871.webp',
    gallery: [
      ['IMG_1141.webp', 'Силуэт будущей мамы у окна'],
      ['IMG_1273.webp', 'Портрет будущей мамы с цветами'],
      ['IMG_1590.webp', 'Образная съёмка беременности на открытом воздухе'],
      ['IMG_5871.webp', 'Портрет будущей мамы в светлом фоне'],
      ['IMG_7312.webp', 'Фотосессия беременности в светлом интерьере'],
      ['IMG_7522.webp', 'Будущая мама у окна в белом образе'],
    ], folder: 'pregnancy',
    galleryIntro: 'Съёмки могут быть тихими, светлыми или более выразительными. Образ и настроение выбираем вместе.',
    steps: [
      ['Выбираем настроение', 'Обсуждаем образ и локацию, которая подходит задуманным кадрам.'],
      ['Проводим съёмку', 'В течение часа я помогаю с позированием и внимательно слежу за темпом.'],
      ['Готовлю портреты', 'В пакет входят 15 фото в детальной ретуши, если требуется, и не менее 20 в лёгкой ретуши.'],
    ],
    offers: [['Съёмка беременности', 6000, 'Один час, помощь с образом и локацией, 15 фото в детальной ретуши при необходимости и не менее 20 фото в лёгкой ретуши.']],
    faqs: [
      ['Нужен ли готовый образ?', 'Нет. Я помогу подобрать образ и локацию для съёмки.'],
      ['Сколько длится фотосессия?', 'Пакет включает один час съёмки.'],
      ['Сколько готовых фотографий входит?', '15 фотографий в детальной ретуши при необходимости и не менее 20 в лёгкой ретуши.'],
    ],
  },
  {
    slug: 'art-fotosessiya', name: 'Образная съёмка', title: 'Образная фотосессия в Хабаровске',
    description: 'Образная фотосессия в Хабаровске у Анны Финк: сюжет, художественный образ, кинематографичный свет. Примеры творческих серий и обсуждение съёмки.',
    intro: 'Здесь кадр начинается с идеи: света, движения, костюма или сюжета. Можно прийти с готовым образом либо обсудить настроение и вместе найти визуальную историю.',
    facts: ['Авторский сюжет', 'Студия, помещение или улица', 'Стоимость 5000 ₽'],
    hero: 'art/IMG_7879.webp',
    gallery: [
      ['IMG_3052.webp', 'Чёрно-белый образ с крыльями'],
      ['IMG_3971.webp', 'Кинематографичный портрет при свечах'],
      ['IMG_4000.webp', 'Образный портрет со свечами'],
      ['IMG_6134.webp', 'Балетный образ на тёмном фоне'],
      ['IMG_7879.webp', 'Зимняя образная съёмка с лошадью'],
      ['IMG_8594.webp', 'Фотография у скал и огня'],
    ], folder: 'art',
    galleryIntro: 'Каждая серия строится вокруг своего образа: от балета и свечей до зимней истории с лошадью.',
    steps: [
      ['Находим сюжет', 'Обсуждаем историю, настроение и художественный образ.'],
      ['Готовим пространство', 'В зависимости от замысла выбираем студию, помещение или уличную локацию и свет.'],
      ['Снимаем серию', 'Во время съёмки я направляю движения и ищу кадры, которые передают историю.'],
    ],
    offers: [['Образная съёмка', 5000, 'Сюжет, художественный образ и работа со светом. Состав и детали конкретной съёмки уточняются в переписке.']],
    faqs: [
      ['Можно ли прийти без готовой идеи?', 'Да. Напиши, какое настроение тебе близко, и мы обсудим сюжет и образ.'],
      ['Нужно ли приносить реквизит?', 'Это зависит от идеи. Обсудим образ и детали до съёмки, чтобы подготовить только нужное.'],
      ['Сколько фотографий входит в стоимость?', 'Количество кадров для этого направления пока не указано на сайте. Уточни состав съёмки перед записью.'],
    ],
  },
];
// Anna's first priorities: creative work, women's portraits, family sessions.
const priority = ['art-fotosessiya', 'zhenskaya-fotosessiya', 'semeynaya-fotosessiya', 'fotosessiya-beremennosti'];
pages.sort((a, b) => priority.indexOf(a.slug) - priority.indexOf(b.slug));
const sharedFaqs = [
  ['Где можно провести съёмку?', 'Место выбираем под идею: это может быть студия, другое помещение или открытая локация.'],
  ['Когда будут готовы фотографии?', 'Срок выдачи готовых фотографий — 2–3 недели.'],
  ['Что оплачивается отдельно?', 'Аренда фотостудии или другой платной локации не входит в стоимость съёмки. При желании отдельно можно заказать визажиста и стилиста по волосам.'],
  ['Можно ли перенести съёмку?', 'Бесплатно перенести съёмку можно, если предупредить не позднее чем за 24 часа.'],
];

const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const assets = path => `../assets/${path}`;
for (const page of pages) {
  for (const image of [page.hero, ...page.gallery.map(([file]) => `${page.folder}/${file}`)]) {
    if (!existsSync(`assets/webp/${image}`)) throw new Error(`Missing image: ${image}`);
  }
  const url = `${origin}/${page.slug}/`;
  const otherPages = pages.filter(other => other.slug !== page.slug);
  const schema = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'Person', '@id': `${origin}/#anna`, name: 'Анна Финк', url: origin + '/', sameAs: ['https://t.me/Anna_Fink', 'https://vk.com/anna_fink'] },
      { '@type': 'Service', '@id': `${url}#service`, name: page.name, description: page.description,
        serviceType: page.name, provider: { '@id': `${origin}/#anna` }, areaServed: { '@type': 'City', name: 'Хабаровск' },
        offers: page.offers.map(([name, price]) => ({ '@type': 'Offer', name, price, priceCurrency: 'RUB', url })) },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: origin + '/' },
        { '@type': 'ListItem', position: 2, name: page.name, item: url },
      ] },
    ],
  };
  const content = `<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(page.title)} — Анна Финк</title>
  <meta name="description" content="${escapeHtml(page.description)}">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="ru_RU">
  <meta property="og:title" content="${escapeHtml(page.title)} — Анна Финк">
  <meta property="og:description" content="${escapeHtml(page.description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${origin}/assets/webp/${page.hero}">
  <meta name="theme-color" content="#21241a">
  <link rel="icon" href="../brand_assets/logo.png">
  <link rel="preload" href="../assets/fonts/CormorantGaramond-500-normal-cyrillic.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="../assets/fonts/Manrope-400-normal-cyrillic.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="../assets/fonts/fonts.css">
  <link rel="stylesheet" href="../assets/service-pages.css">
  <script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>
</head>
<body>
  <header class="site-header"><div class="wrap header-inner">
    <a class="brand" href="../" aria-label="Анна Финк — на главную"><img src="../brand_assets/logo-trim.png" width="175" height="51" alt="Анна Финк, фотограф"></a>
    <nav class="site-nav" aria-label="Основная навигация"><a href="../">Главная</a><a href="#works">Работы</a><a href="#price">Стоимость</a><a href="#questions">Вопросы</a><a href="#contact">Записаться</a></nav>
    <details class="mobile-nav"><summary>Меню</summary><nav aria-label="Мобильная навигация"><a href="../">Главная</a><a href="#works">Работы</a><a href="#price">Стоимость</a><a href="#questions">Вопросы</a><a href="#contact">Записаться</a></nav></details>
  </div></header>
  <main>
    <div class="wrap breadcrumbs"><a href="../">Главная</a><span aria-hidden="true">/</span>${escapeHtml(page.name)}</div>
    <section class="wrap hero" aria-labelledby="page-title">
      <div><p class="eyebrow">Фотограф Анна Финк · Хабаровск</p><h1 id="page-title">${escapeHtml(page.title)}</h1><p class="lead">${escapeHtml(page.intro)}</p>
        <ul class="facts">${page.facts.map(fact => `<li>${escapeHtml(fact)}</li>`).join('')}</ul>
        <div class="actions"><a class="button" href="#contact">Обсудить съёмку</a><a class="button ghost" href="#works">Посмотреть работы</a></div>
      </div>
      <figure><img src="${assets(`webp/${page.hero}`)}" alt="${escapeHtml(page.gallery.find(([file]) => page.hero.endsWith(file))?.[1] || page.name)}" width="800" height="1100" fetchpriority="high"></figure>
    </section>
    <section class="band" id="works"><div class="wrap"><p class="eyebrow">Портфолио</p><h2>Примеры съёмок</h2><p class="section-intro">${escapeHtml(page.galleryIntro)}</p>
      <div class="gallery">${page.gallery.map(([file, alt]) => { const src = assets(`webp/${page.folder}/${file}`); return `<a href="${src}" aria-label="Открыть фотографию: ${escapeHtml(alt)}"><img src="${src}" alt="${escapeHtml(alt)}" width="600" height="800" loading="lazy" decoding="async"></a>`; }).join('')}</div>
    </div></section>
    <section class="band" id="approach"><div class="wrap"><p class="eyebrow">Как проходит съёмка</p><h2>От идеи до фотографий</h2><div class="details-grid">${page.steps.map(([heading, body], index) => `<article class="detail"><span class="num">0${index + 1}</span><h3>${escapeHtml(heading)}</h3><p>${escapeHtml(body)}</p></article>`).join('')}</div></div></section>
    <section class="band" id="price"><div class="wrap"><p class="eyebrow">Стоимость</p><h2>Форматы и цены</h2><div class="price-grid">${page.offers.map(([name, price, detail]) => `<article class="price-card"><h3>${escapeHtml(name)}</h3><strong>${price.toLocaleString('ru-RU')} ₽</strong><p>${escapeHtml(detail)}</p></article>`).join('')}</div><p class="section-intro">Аренда студии или другой платной локации оплачивается отдельно. При желании отдельно можно заказать визажиста и стилиста по волосам. Готовые фотографии выдаю через 2–3 недели.</p></div></section>
    <section class="band" id="questions"><div class="wrap faq"><p class="eyebrow">Частые вопросы</p><h2>Что важно знать</h2>${[...page.faqs, ...sharedFaqs].map(([q, a]) => `<details><summary>${escapeHtml(q)}</summary><p>${escapeHtml(a)}</p></details>`).join('')}</div></section>
    <section class="band"><div class="wrap"><p class="eyebrow">Другие направления</p><h2>Выбрать съёмку</h2><div class="related">${otherPages.map(other => `<a href="../${other.slug}/">${escapeHtml(other.name)}</a>`).join('')}<a href="../#services">Все услуги</a></div></div></section>
    <section class="band contact" id="contact"><div class="wrap"><p class="eyebrow">Запись на съёмку</p><h2>Расскажи мне свою идею</h2><p>Напиши, какой формат тебе интересен. Мы обсудим настроение, место и детали съёмки в Хабаровске.</p><div class="actions">${contact.map(([label, href]) => `<a class="button ghost" href="${href}" target="_blank" rel="noopener noreferrer">Написать в ${label}</a>`).join('')}</div></div></section>
  </main>
  <footer class="site-footer"><div class="wrap footer-inner"><span>© Анна Финк · фотограф в Хабаровске</span><nav class="footer-links" aria-label="Навигация внизу страницы"><a href="../">Главная</a><a href="#works">Портфолио</a><a href="#contact">Контакты</a></nav></div></footer>
</body>
</html>
`;
  mkdirSync(page.slug, { recursive: true });
  writeFileSync(`${page.slug}/index.html`, content);
}
// lastmod is omitted until a per-page content change can be tracked reliably.
const urls = [origin + '/', ...pages.map(page => `${origin}/${page.slug}/`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`;
writeFileSync('sitemap.xml', sitemap);
console.log(`Built ${pages.length} service pages and sitemap`);
