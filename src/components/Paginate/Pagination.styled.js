import styled from 'styled-components';
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  ul {
    display: flex;
    list-style: none;
    gap: 10px;
  }

`;

export const PageNumber = styled.button`
  background-color: ${props => (props.active ? '#007BFF' : '#f2f2f2')};
  color: ${props => (props.active ? '#fff' : '#e74e13')};
  padding: 8px 12px;
  margin: 0 4px;
  cursor: pointer;
  border-radius: 90px;
  border: 1px solid #e74e13;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => (props.active ? '#007BFF' : '#e74e13')};
    color: #fff;
  }
`;
