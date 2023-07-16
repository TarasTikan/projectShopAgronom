import { Outlet } from "react-router-dom";
import { Container, Head, Nav, NavList, StyledLink } from "./AppBar.styled";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { AuthNav } from "components/AuthNav/AuthNav";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  console.log(isLoggedIn);
  return (
    <>
      <Head>
        <Container>
          <Nav>
            <NavList>
              <li>
                <StyledLink to="/">Про нас</StyledLink>
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
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Nav>
        </Container>
      </Head>
      <Outlet />
    </>
  );
};