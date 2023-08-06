import styled from 'styled-components';
export const PlantsSection = styled.section`
  padding-bottom: 116px;
  padding-top: 20px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(132, 190, 81, 0.3) 0%,
    rgba(210, 230, 189, 0) 100%
  );
`;

export const Container = styled.div`
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const UrlList = styled.ul`
  display: flex;
  gap: 5px;
  list-style: none;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

export const WrapTitle = styled.div`
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: center;
  margin-bottom: 27px;
`;

export const TitleOrder = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ContactsTitle = styled.h2`
  color: #000;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 15px;
`;

export const ContactsForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 28px;
  width: 540px;
  padding-bottom: 31px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 26px;
`;

export const ContactInput = styled.input`
  border-radius: 90px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  width: 233px;
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

export const ContactsComment = styled.textarea`
  width: 540px;
  height: 87px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding-top: 10px;
  padding-left: 19px;
  color: #484848;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  resize: none;
`;

export const ContactSelect = styled.select`
  border-radius: 90px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  width: 255px;
  height: 40px;
  padding-left: 19px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #484848;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const InputPostIndex = styled.input`
  border-radius: 90px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  width: 233px;
  height: 19px;
  color: #484848;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 19px;
  padding-top: 10px;
  margin-bottom: 20px;
  padding-bottom: 10px;
`;

export const FormDelivery = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 28px;
  width: 540px;
  padding-bottom: 11px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 26px;
`;

export const FormPay = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
`;

export const FormLabel = styled.label`
  color: #484848;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 9px;
  display: flex;
`;

export const FormChackbox = styled.input`
  color: #484848;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 9px;
`;

export const WrapOrder = styled.div`
  display: flex;
  gap: 29px;
  justify-content: center;
`;

export const ContainerBasket = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #fff;
  width: 482px;
  padding-bottom: 30px;
  padding-left: 29px;
  padding-right: 29px;
  padding-top: 26px;
`;

export const TitleBasket = styled.h2`
  color: #000;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
`;

export const BtnConfirmOrder = styled.button`
  width: 482px;
  height: 47px;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  gap: 7px;
  font-weight: 700;
  border: 1px solid #e74e13;
  border-radius: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e74e13;
  line-height: normal;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #e74e13;
    border-color: #e74e13;
    background-color: #ffff;
    svg {
      fill: #e74e13;
    }
  }

  svg {
    fill: #fff;
  }
`;
