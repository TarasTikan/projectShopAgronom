import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/operations";
import { FormBtnSubmit, FormInput, LoginForm, LoginText, TextUrl, UrlList, WrapContainerTitle, WrapTitle } from "./FormLogin.styled";
import treeLeastLeft from '../../assets/images/treelist.png';
import treeLeastRight from '../../assets/images/treelestright.png';
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
        dispatch(
          login({
            email,
            password,
          }))
        setEmail('');
        setPassword('');
        form.reset();
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
      <UrlList>
        <li>
          <TextUrl>Головна</TextUrl>
        </li>
        <li>
          <TextUrl>Авторизація</TextUrl>
        </li>
        <li>
          <TextUrl>Реєстрація</TextUrl>
        </li>
      </UrlList>
      <WrapContainerTitle>
        <WrapTitle>
          <img src={treeLeastLeft} alt="decorLeast" />
          <h1>Авторизація</h1>
          <img src={treeLeastRight} alt="decorLeast" />
        </WrapTitle>
        <LoginText>
          Увійдіть, щоб використовувати всі можливості особистого кабінету:
          відстеження замовлень, налаштування передплати, зв'язки з соціальними
          мережами та інші. Ми ніколи і за жодних умов не розголошуємо особисті
          дані клієнтів. Контактна інформація буде використана тільки для
          оформлення замовлень та зручнішої роботи з сайтом
        </LoginText>
      </WrapContainerTitle>
      <LoginForm onSubmit={handleSubmit}>
        <FormInput
          type="email"
          placeholder="E-mail"
          onChange={handleChange}
          value={email}
          name="email"
        />
        <FormInput
          type="password"
          placeholder="Пароль"
          onChange={handleChange}
          value={password}
          name="password"
        />
        <FormBtnSubmit type="submit">Увійти</FormBtnSubmit>
      </LoginForm>
    </>
  );
};
