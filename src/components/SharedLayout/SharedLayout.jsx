import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
      <header>
        <div>
          <nav>
            <ul>
              <li>
                <p>Про нас</p>
              </li>
              <li>
                <p>Каталог продукції</p>
              </li>
              <li>
                <p>Оплата і доставка</p>
              </li>
              <li>
                <p>Партнери</p>
              </li>
              <li>
                <p>Новини</p>
              </li>
              <li>
                <p>Контакти</p>
              </li>
            </ul>
            <ul>
              <li>
                <p>Вхід</p>
              </li>
              <li>
                <p>Реестрація</p>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};