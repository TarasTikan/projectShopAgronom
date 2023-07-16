import { Outlet } from "react-router-dom";
import { AuthList, Container, Head, Nav, NavList, StyledLink } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <>
      <Head>
        <Container>
          <Nav>
            <NavList>
              <li>
                <StyledLink to='/'>Про нас</StyledLink>
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
            </NavList>
            <AuthList>
              <li>
                <StyledLink to='/signIn'>Вхід</StyledLink>
              </li>
              <li>
                <StyledLink to='/signUp'>Реестрація</StyledLink>
              </li>
            </AuthList>
          </Nav>
        </Container>
      </Head>
      <Outlet />
    </>
  );
};