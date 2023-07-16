import logo from '../../assets/Logo.png';
import { ImgLogo } from './CompanyDetails.styled';
export const CompanyDetails = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <ImgLogo src={logo} alt="logo" width="158" height="71" />
          </li>
          <li>
            <p>Пропонуємо покупцям широкий вибір насіння овочів</p>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Інформація</h3>
          </li>
          <li>
            <p>Про компанію</p>
          </li>
          <li>
            <p>Оплата і доставка</p>
          </li>
          <li>
            <p>Партнери</p>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Товари</h3>
          </li>
          <li>
            <p>Каталог і продукції</p>
          </li>
          <li>
            <p>Засоби захисту рослин</p>
          </li>
          <li>
            <p>Насіння</p>
          </li>
          <li>
            <p>Добрива</p>
          </li>
          <li>
            <p>Агроному в поміч</p>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Контакти</h3>
          </li>
          <li>
            <div>
              <p>+38 (067) 115 00 58</p>
              <p>Замовити зворотній зв’язок</p>
            </div>
          </li>
          <li>
            <p>DAT@gmail.com</p>
          </li>
        </ul>
      </div>
      <p> &#169 2022 DAT</p>
    </>
  );
};
