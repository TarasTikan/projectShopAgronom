import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  CheackBoxSpan,
  CheckBoxText,
  FormBtnSubmit,
  FormInput,
  FormPssword,
  RegisterForm,
  RegisterText,
  TextUrl,
  UrlList,
  WrapCheckBox,
  WrapContainerTitle,
  WrapTitle,
} from './FormRegister.styled';
import treeLeastLeft from '../../assets/images/treelist.png';
import treeLeastRight from '../../assets/images/treelestright.png';
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
          <h1>Реєстрація</h1>
          <img src={treeLeastRight} alt="decorLeast" />
        </WrapTitle>
        <RegisterText>
          Увійдіть, щоб використовувати всі можливості особистого кабінету:
          відстеження замовлень, налаштування передплати, зв'язки з соціальними
          мережами та інші. Ми ніколи і за жодних умов не розголошуємо особисті
          дані клієнтів. Контактна інформація буде використана тільки для
          оформлення замовлень та зручнішої роботи з сайтом
        </RegisterText>
      </WrapContainerTitle>
      <RegisterForm onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Ім’я"
          onChange={handleChange}
          name="name"
          value={name}
        />
        <FormInput
          type="text"
          placeholder="Прізвище"
          onChange={handleChange}
          name="surname"
          value={surname}
        />
        <FormInput
          type="tel"
          placeholder="Телефон"
          onChange={handleChange}
          name="phone"
          value={phone}
        />
        <FormInput
          type="email"
          placeholder="E-mail"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormPssword
          type="password"
          placeholder="Пароль"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormPssword
          type="password"
          placeholder="Підтвердити пароль"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <WrapCheckBox>
          <input type="checkbox" />
          <CheckBoxText>
            я згоден на обробку і захист{' '}
            <CheackBoxSpan>персональних даних</CheackBoxSpan>
          </CheckBoxText>
        </WrapCheckBox>
        <FormBtnSubmit type="submit">Зареєструватися</FormBtnSubmit>
      </RegisterForm>
    </>
  );
};
