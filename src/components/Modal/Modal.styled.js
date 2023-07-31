import styled, { keyframes } from 'styled-components';

const overlayEntrance = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const modalEntrance = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  animation: ${overlayEntrance} 0.3s ease;
`;

export const ContainerModal = styled.div`
  width: 918px;
  height: 444px;
  border-radius: 20px;
  background: #fff;
  padding-top: 48px;
  padding-bottom: 72px;
  padding-left: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 96px;
  justify-content: center;
  animation: ${modalEntrance} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;


export const TitleModal = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const WrapTitle = styled.div`
display: flex;
gap: 20px;
align-items: center;
justify-content: center;`


export const ImgDecor = styled.img`
  width: 32px;
  height: 25px;
`;

export const WrapInfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 27px;
  padding-bottom: 31px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 27px;
`;
export const WrapProductImg = styled.div`
display: flex;
align-items: center;
gap: 30px;
margin-top: 19px;
justify-content: center;`;

export const ContImg = styled.div`
  width: 285px;
  height: 192px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
`;
export const TitleModel = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const PriceProductModal = styled.h2`
  color: #84be51;
  font-family: Montserrat;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 3px;
`;

export const TextPrice = styled.p`
  color: #000;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TitleProducerModal = styled.h2`
  color: #000;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 26px;
  margin-bottom: 11px;
`;

export const ProducerText = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;


export const WrapProductBuy = styled.div`
  display: flex;
  align-items: center;
  gap: 192px;
  justify-content: center;
`;


export const BtnBuy = styled.button`
  width: 260px;
  height: 47px;
  border-radius: 90px;
  border: 1px solid #e74e13;
  color: #e74e13;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: transparent;
`;


export const WrapNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;
  margin-top: 32px;
`;

export const TitleNumber = styled.h2`
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 3px;
`;

export const BtnMinusAndPlus = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #84c551;
  color: #ffff;
  border: none;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;
`;

export const NumberContainer = styled.div`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 47px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  height: 47px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnDelivery = styled.button`
  border-radius: 90px;
  width: 260px;
  height: 44px;
  border: 1px solid #e74e13;
  border-radius: 90px;
  color: #e74e13;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #ffff;
    border-color: #ffff;
    background-color: #e74e13;
  }
`;



export const BtnOrder = styled.button`
  width: 260px;
  height: 44px;
  border-radius: 90px;
  border: 1px solid #e74e13;
  background-color: #e74e13;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #fff;
    color: #e74e13;
    border: 1px solid #e74e13;
  }
`;

export const WrapBtnOrder = styled.div`
  display: flex;
  align-items: center;
  gap: 395px;
  justify-content: center;
  margin-top: 30px
`;
