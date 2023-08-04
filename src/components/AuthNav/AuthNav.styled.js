import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const AuthList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 16px;
  font-family: Montserrat;
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
