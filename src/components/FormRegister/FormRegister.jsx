import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const FormRegister = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (
      name.trim() === '' ||
      surname.trim() === '' ||
      email.trim() === '' ||
      phone.trim() === '' ||
      password.trim() === ''
    ) {
      alert('Будь ласка, заповніть всі поля.');
      return;
    }
    if (password === confirmPassword) {
      dispatch(
        register({
          name,
          surname,
          email,
          phone,
          password,
        })
      );
      setName('');
      setSurname('');
      setEmail('');
      setPhone('');
      setPassword('');
      setConfirmPassword('');
      form.reset();
    }
  };
  const handleChange = e => {
    const targetValue = e.target.value;
    switch (e.target.name) {
      case 'name':
        setName(targetValue);
        break;
      case 'surname':
        setSurname(targetValue);
        break;
      case 'email':
        setEmail(targetValue);
        break;
      case 'password':
        setPassword(targetValue);
        break;
      case 'phone':
        setPhone(targetValue);
        break;
      case 'confirmPassword':
        setConfirmPassword(targetValue);
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
        <h1>Реєстрація</h1>
        <p>
          Увійдіть, щоб використовувати всі можливості особистого кабінету:
          відстеження замовлень, налаштування передплати, зв'язки з соціальними
          мережами та інші. Ми ніколи і за жодних умов не розголошуємо особисті
          дані клієнтів. Контактна інформація буде використана тільки для
          оформлення замовлень та зручнішої роботи з сайтом
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Ім’я"
            onChange={handleChange}
            name="name"
          />
          <input
            type="text"
            placeholder="Прізвище"
            onChange={handleChange}
            name="surname"
          />
          <input
            type="tel"
            placeholder="Телефон"
            onChange={handleChange}
            name="phone"
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={handleChange}
            name="email"
          />
        </div>
        <input
          type="password"
          placeholder="Пароль"
          onChange={handleChange}
          name="password"
        />
        <input
          type="password"
          placeholder="Підтвердити пароль"
          onChange={handleChange}
          name="confirmPassword"
        />
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
};
