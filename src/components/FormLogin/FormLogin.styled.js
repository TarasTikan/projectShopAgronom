import styled from 'styled-components';

export const UrlList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: center;
  margin-bottom: 8px;
  gap: 10px;
`;

export const TextUrl = styled.p`
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const WrapContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
  justify-content: center;
`;
export const WrapTitle = styled.div`
  display: flex;
  gap: 17px;
  justify-content: center;
  align-items: center;
`;
export const LoginText = styled.p`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 21px;
`;

export const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  column-gap: 28px;
  width: 540px;
  margin-left: auto;
  margin-right: auto;
`;

export const FormInput = styled.input`
  border-radius: 90px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  width: 518px;
  height: 19px;
  color: #484848;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 19px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

export const FormBtnSubmit = styled.button`
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 540px;
  height: 47px;
  border-radius: 90px;
  background-color: #e74e13;
  border: 1px solid #e74e13;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #e74e13;
    border-color: #e74e13;
    background-color: #ffff;
  }
`;
