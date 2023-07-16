export const FormRegister = () => {
    return (
      <>
        <ul>
          <li>
            <p>Головна</p>
          </li>
          <li>
            <p>Авторизація</p>
          </li>
          <li>
            <p>Реєстрація</p>
          </li>
        </ul>
        <div>
          <h1>Реєстрація</h1>
          <p>
            Увійдіть, щоб використовувати всі можливості особистого кабінету:
            відстеження замовлень, налаштування передплати, зв'язки з
            соціальними мережами та інші. Ми ніколи і за жодних умов не
            розголошуємо особисті дані клієнтів. Контактна інформація буде
            використана тільки для оформлення замовлень та зручнішої роботи з
            сайтом
          </p>
        </div>
        <form>
          <div>
            <input type="text" placeholder="Ім’я" />
            <input type="text" placeholder="Прізвище" />
            <input type="tel" placeholder="Телефон" />
            <input type="email" placeholder="E-mail" />
          </div>
          <input type="password" placeholder="Пароль" />
          <input type="password" placeholder="Підтвердити пароль" />
          <div>
            <input type="checkbox" />
            <p>
              я згоден на обробку і захист <span>персональних даних</span>
            </p>
          </div>
          <button type="submit">Зареєструватися</button>
        </form>
      </>
    );
}