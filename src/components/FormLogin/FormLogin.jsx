import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/operations";

export const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      if (
        email.trim() === '' ||
        password.trim() === ''
      ) {
        alert('Будь ласка, заповніть всі поля.');
        return;
      }
      if (!password) {
        dispatch(
          login({
            email,
            password,
          })
        );
        setEmail('');
        setPassword('');
        form.reset();
      }
    };
    const handleChange = e => {
      const targetValue = e.target.value;
      switch (e.target.name) {
        case 'email':
          setEmail(targetValue);
          break;
        case 'password':
          setPassword(targetValue);
          break;
        default:
          return;
      }
    };
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
        <h1>Авторизація</h1>
        <p>
          Увійдіть, щоб використовувати всі можливості особистого кабінету:
          відстеження замовлень, налаштування передплати, зв'язки з соціальними
          мережами та інші. Ми ніколи і за жодних умов не розголошуємо особисті
          дані клієнтів. Контактна інформація буде використана тільки для
          оформлення замовлень та зручнішої роботи з сайтом
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="E-mail" onChange={handleChange} />
        <input type="password" placeholder="Пароль" onChange={handleChange} />
        <button type="submit">Увійти</button>
      </form>
    </>
  );
};
