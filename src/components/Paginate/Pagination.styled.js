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
    .previous {
      margin-right: 10px;
    }
    .next {
      margin-left: 10px;
    }
  }
  .page-item {
    background-color: #f2f2f2;
    color: #e74e13;
    border-radius: 90px;
    border: 1px solid #e74e13;
    box-shadow: 0px 5px 14px 0px rgba(140, 50, 19, 0.3);
    transition: background-color 0.3s ease;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #e74e13;
      color: #fff;
    }

    &.active {
      background-color: #e74e13;
      color: #fff;

      &:hover {
        background-color: #e74e13;
        color: #fff;
      }
    }
  }
`;

export const PageNumber = styled.button`
  background-color: #f2f2f2;
  color: #e74e13;
  border-radius: 90px;
  border: 1px solid #e74e13;
  fill: #e74e13;
  stroke: #e74e13;
  box-shadow: 0px 5px 14px 0px rgba(140, 50, 19, 0.3);
  transition: background-color 0.3s ease;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => (props.active ? '#007BFF' : '#e74e13')};
    stroke: #fff;
    fill: #fff;
  }
`;
