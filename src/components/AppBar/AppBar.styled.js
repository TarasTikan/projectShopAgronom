import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Head = styled.header`
  background: #1e6140;
  `;
export const Container = styled.div`
  width: 1200px;
  padding-left: 15px;
  height: 50px;
  padding-right: 15px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
display: flex;
align-items:center;

`;

export const NavList = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
  align-items: center;
  position: relative;
  margin-right: 82px;
  /* НЕЗАБУДЬ ВИДАЛИТИ КОЛОР І ФОНТ ФЕМІЛІ */
  color: #ffff;
  font-family: Montserrat;
  /* НЕЗАБУДЬ ВИДАЛИТИ КОЛОР І ФОНТ ФЕМІЛІ */
  &::after {
    content: '';
    background: rgba(255, 255, 255, 0.2);
    width: 1px;
    height: 50px;
    margin-left: 40px;
  }
`;
export const AuthList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 16px;
  /* НЕЗАБУДЬ ВИДАЛИТИ КОЛОР І ФОНТ ФЕМІЛІ */
  color: #ffff;
  font-family: Montserrat;
  /* НЕЗАБУДЬ ВИДАЛИТИ КОЛОР І ФОНТ ФЕМІЛІ */
`;

export const StyledLink = styled(NavLink)`
  color: #ffffff;
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  font-family: Montserrat;
  padding-top: 14px;
  padding-bottom: 15px;
  text-decoration: none;
  &:hover {
    color: orange;
  }
`;