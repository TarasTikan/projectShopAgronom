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

export const AuthItem = styled.li`
display: flex;
justify-content: center;
align-items: center;
gap: 8px;
&::after {
  content: '';
  background-color: #ffff;
  width: 1px;
  height: 18px;
  margin-left: 5px;
}
`