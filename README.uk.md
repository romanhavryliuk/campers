# TravelTrucks

🇺🇦 Українська | [🇬🇧 English](./README.md)

Вебзастосунок для оренди кемперів, побудований на **Next.js** та **TypeScript**. Користувач може переглядати каталог кемперів, фільтрувати їх за локацією, типом кузова, двигуном і трансмісією, переглядати повну інформацію з галереєю фото й відгуками, а також залишити заявку на бронювання.

Виконано як фронтенд-завдання для GoIT, працює з реальним публічним бекендом [campers-api.goit.study](https://campers-api.goit.study).

## Функціонал

### Головна сторінка
- Банер із закликом до дії "View Now", що веде в каталог.

### Сторінка каталогу (`/catalog`)
- Фільтрація за локацією (текстове поле), типом кузова, двигуном і трансмісією (можна обрати лише один варіант), реалізована на бекенді через query-параметри.
- Пагінація у форматі "Load more" — довантажує ще 4 кемпери з урахуванням активних фільтрів, на хуку `useInfiniteQuery` з TanStack Query.
- Порожній стан ("No campers found") з кнопками швидко скинути фільтри або показати всі кемпери.
- Кнопка "Show more" на кожній картці відкриває сторінку деталей кемпера в новій вкладці браузера.

### Сторінка деталей кемпера (`/catalog/[camperId]`)
- Відкривається в новій вкладці, як і вимагає завдання.
- Галерея зображень (велике фото + мініатюри) на бібліотеці Swiper.
- Технічні характеристики: двигун, трансмісія, тип кузова й опції — у вигляді бейджів з іконками, плюс таблиця розмірів (довжина, ширина, висота, бак, витрата).
- Відгуки користувачів із рейтингом у форматі п'ятизіркової шкали.
- Форма бронювання (ім'я + email) з валідацією наживо та нотифікацією про успіх/помилку, дані надсилаються напряму на бекенд.

### Інше
- Стани завантаження, обробка помилок і кастомні 404-сторінки для кожного маршруту.
- Верстка орієнтована на десктоп, відповідно до наданого макета у Figma.

## Технології

- [Next.js 15](https://nextjs.org/) (App Router) + [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query](https://tanstack.com/query) — запити до бекенду і пагінація через `useInfiniteQuery`
- CSS Modules — стилізація
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) — валідація форми бронювання
- [Swiper](https://swiperjs.com/) — галерея зображень
- [React Icons](https://react-icons.github.io/react-icons/) — іконки
- [React Hot Toast](https://react-hot-toast.com/) — нотифікації
- [Axios](https://axios-http.com/) — HTTP-клієнт

## Структура проєкту

```
src/
├── app/          # маршрути (Next.js App Router): сторінки, лейаути, стани loading/error
├── components/    # одна папка на компонент (Component.tsx + Component.module.css)
├── hooks/         # хуки TanStack Query (пагінація каталогу, деталі кемпера, відгуки, фільтри)
├── services/      # axios-інстанс і функції запитів до API
├── schemas/       # схеми валідації Zod
├── types/         # спільні TypeScript-типи, що відповідають контракту бекенду
├── constants/     # варіанти фільтрів, таблиці іконок/підписів
└── utils/         # дрібні хелпери форматування
```

## Встановлення та запуск

### Вимоги

- Node.js 18.18+ (або 20+)

### Встановлення залежностей

```bash
npm install
```

### Змінні середовища

Скопіюй `.env.example` у `.env.local`:

```bash
cp .env.example .env.local
```

```
NEXT_PUBLIC_API_BASE_URL=https://campers-api.goit.study
```

### Запуск у режимі розробки

```bash
npm run dev
```

Відкрий [http://localhost:3000](http://localhost:3000).

### Продакшн-збірка

```bash
npm run build
npm start
```

### Лінтер

```bash
npm run lint
```

## Бекенд

Застосунок працює з публічним API TravelTrucks за адресою `https://campers-api.goit.study` (Swagger-документація за `/docs`) — авторизація не потрібна. Усі звернення до API — у `src/services/`.

## Деплой

Проєкт готовий до деплою на [Vercel](https://vercel.com/) або [Netlify](https://www.netlify.com/) — достатньо додати `NEXT_PUBLIC_API_BASE_URL` у змінні середовища платформи.

## Автор

**Roman Havryliuk**
- Email: [romanfest1221@gmail.com](mailto:romanfest1221@gmail.com)
- GitHub: [@romanhavryliuk](https://github.com/romanhavryliuk)
