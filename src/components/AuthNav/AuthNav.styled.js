import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
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