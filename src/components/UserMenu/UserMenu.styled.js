import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const AuthList = styled.div`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 16px;
`;

export const StyledLink = styled`
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
