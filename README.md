# Магазин Агрономії

## Огляд проекту

Цей проект є веб-додатком - магазином агрономії, де можна знайти продукти для сільськогосподарських потреб. Магазин побудований з використанням HTML, CSS і JavaScript для клієнтської сторони, а також з використанням React.js для забезпечення динамічних функцій.

## Функціонал

1. **Категорії та підкатегорії:**
   - "PlantsProtect": з продуктами для захисту рослин, включаючи гербіциди, фунгіциди, інсектициди та інші.
   - "Кормова група": з продуктами для тварин, птиць та риби.
   - "Добрива": з різними видами добрив для рослин.

2. **Фільтри для пошуку:**
   Кожна категорія та підкатегорія має свої фільтри для зручного пошуку товарів за виробником, культурою та ціною.

3. **Корзина та замовлення:**
   Користувач може додавати товари до корзини та здійснювати замовлення, вибравши необхідну кількість кожного продукту.

4. **Детальна інформація про продукт:**
   Клікнувши на продукт, користувач може переглянути детальну інформацію та здійснити покупку.

5. **Swiper на головній сторінці:**
   На головній сторінці розміщені Swiper для показу новинок, акцій та партнерів.

6. **Реєстрація та Авторизація:**
   Магазин Агрономії надає можливість реєстрації та авторизації користувачів. Ви можете створити новий акаунт та увійти в свій особистий кабінет для здійснення замовлень та перегляду історії покупок. Для забезпечення безпеки та захисту особистих даних, ми використовуємо JWT (JSON Web Token) для аутентифікації користувачів.

## Використані технології

- Frontend:
  - React.js: JavaScript бібліотека для побудови користувацьких інтерфейсів.
  - Redux Toolkit: Пакет для ефективного управління станом додатка.
  - React Router DOM: Бібліотека для маршрутизації в React додатках.
  - Styled Components: Бібліотека для написання стилів в React компонентах.
  - Axios: Бібліотека для взаємодії з сервером через HTTP запити.
  - Swiper: Бібліотека для створення Swiper на головній сторінці.
  - React Helmet: Бібліотека для динамічної зміни заголовку і мета-тегів сторінки.
  - React Paginate: Бібліотека для реалізації пагінації на сторінках з багато елементів.

- Backend:
  - Node.js: Веб-сервер на основі JavaScript.
  - Express: Фреймворк для побудови веб-додатків на Node.js.
  - MongoDB: NoSQL база даних для зберігання даних про продукти, замовлення та користувачів.

- Інше:
  - Redux Persist: Бібліотека для зберігання стану Redux в локальному сховищі.
  - Nanoid: Бібліотека для генерації унікальних ідентифікаторів.
  - React Loader Spinner: Компонент для відображення спінера під час завантаження даних.

## Інструкції по запуску

1. Склонуйте цей репозиторій:

git clone https://github.com/TarasTikan/projectShopAgronom.git

2. Встановіть залежності: 

npm install

3. Запустіть сервер:

npm start

4. Відкрийте браузер і перейдіть за адресою `http://localhost:3000` для перегляду магазину.

## Технічні вимоги

- Веб-браузер (перевірено на Chrome, Firefox, Safari)
- Інтернет-підключення

## Заплановані покращення

1. Додати телефонну версію для кращої мобільної підтримки.
2. Покращити функціональність фільтрів для більш зручного пошуку продуктів.
3. Додати опцію оплати і відстеження замовлення.

Бажаємо вам приємного шопінгу!
