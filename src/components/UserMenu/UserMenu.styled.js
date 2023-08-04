import styled from 'styled-components';
export const AuthList = styled.div`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 16px;
`;

export const ButtonLogout = styled.button`
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  font-weight: 300;
  font-family: Montserrat;
  padding-top: 14px;
  padding-bottom: 15px;
  text-decoration: none;
  border: none;
  &:hover {
    color: orange;
  }
`;
