import styled from 'styled-components';
export const ListBasketProducts = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  list-style: none;
  gap: 20px;
  margin-bottom: 30px;
`;

export const ContainerImg = styled.div`
  width: 110px;
  height: 74px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
`;

export const WrapTitleProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  justify-content: center;
  `;


export const TitleProduct = styled.h3`
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  `;
export const WrapInfoPrice = styled.div`
  display: flex;
  gap: 20px;
  `;
export const PriceProduct = styled.p`
  color: #84be51;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const NumberProduct = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  `;
export const ContainerInfoPrice = styled.div`
  width: 422px;
  border-radius: 20px;
  background: #21603f;
  padding-bottom: 26px;
  padding-left: 29px;
  padding-right: 29px;
  padding-top: 24px;
  display: flex;
  gap: 149px;
  margin-bottom: 20px;
  `;
export const PriceAllProduct = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  `;

export const PriceSpan = styled.span`
  color: #84c551;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  `;

export const WrapIconExit = styled.div`
  position: absolute;
  right: 0;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);
  svg {
    width: 12px;
    height: 11.999px;
  }
  &:hover {
    transform: scale(1.5);
    fill: #e74e13;
  }
`;
  export const ProductItem = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    gap: 21px;
    width: 480px;
  `;