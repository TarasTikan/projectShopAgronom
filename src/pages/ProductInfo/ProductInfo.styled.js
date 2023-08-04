import styled from 'styled-components';

export const ProductSection = styled.section`
  padding-top: 20px;
  padding-bottom: 121px;
`;

export const Container = styled.div`
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UrlList = styled.ul`
  display: flex;
  gap: 5px;
  list-style: none;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;
export const WrapInfoProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  justify-content: center;
  margin-bottom: 72px;
`;

export const Wrapimg = styled.div`
  width: 445px;
  height: 400px;
  border: 1px solid black;
  background-color: #ffff;
`;

export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleProduct = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ImgDecoration = styled.img`
  width: 32px;
  height: 25px;
`;

export const WrapIsStock = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  margin-top: 10px;
  margin-bottom: 27px;
`;
export const TextProductStock = styled.p`
  color: #1e6140;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: auto;
`;

export const TextProductPrice = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ContainerInfoProduct = styled.div`
  display: flex;
  padding-left: 21px;
  gap: 112px;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
  width: 564px;
  margin-bottom: 30px;
  background: #fff;
`;

export const WrapCardsBank = styled.div`
  display: flex;
  gap: 29px;
  flex-direction: column;
  padding-top: 7px;
`;
export const WrapProducer = styled.div`
  display: flex;
  gap: 11px;
  flex-direction: column;
`;
export const TitleProducer = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TextProducer = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const WrapDelivery = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 31px;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 7px;
  border-left: 2px solid rgba(0, 0, 0, 0.1);
`;

export const TitleDelivery = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 11px;
`;

export const TextDelivery = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  width: 217px;
  line-height: normal;
  margin-bottom: 18px;
`;

export const DeliverButton = styled.button`
  border-radius: 90px;
  border-style: solid;
  width: 220px;
  height: 47px;
  border-color: #e74e13;
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

export const WrapPriceInfo = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const WrapPrice = styled.div`
  display: flex;
  margin-right: auto;
  flex-direction: column;
`;

export const TitlePrice = styled.h1`
  color: #84be51;
  font-family: Montserrat;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const PriceText = styled.p`
  color: #000;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const BuyButton = styled.button`
  border-radius: 90px;
  background-color: #e74e13;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
  width: 220px;
  height: 44px;
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  margin-right: 20px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #fff;
    color: #e74e13;
    border: 1px solid #e74e13;
  }
`;

export const ListIcon = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  justify-content: center;
  align-items: center;
`;

export const IconItem = styled.li`
  width: 40px;
  height: 40px;
  border: 1px solid #8c3213;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  fill: #8c3213;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #8c3213;
    fill: #fff;
  }
`;

export const WrapContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

export const WrapDescrip = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductBtnInfo = styled.button`
  width: 220px;
  height: 44px;
  background-color: ${props =>
    props.$active === 'true' ? '#1E6140' : 'transparent'};
  box-shadow: ${props =>
    props.$active === 'true' ? '0px 0px 8px 0px rgba(0, 0, 0, 0.15)' : 'none'};
  color: ${props => (props.$active === 'true' ? '#fff' : '#000')};
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  border-radius: 20px 20px 0px 0px;
`;

export const WrapBtnInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 1005px;
  padding-top: 36px;
  padding-left: 40px;
  padding-right: 65px;
  padding-bottom: 28px;
  border-radius: 0px 20px 20px 20px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
`;

export const TitlteDescipProduct = styled.h2`
  color: #000;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 11px;
`;

export const TextDescripProduct = styled.p`
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 19px;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 14px;
  list-style: none;
`;

export const SpanTextProduct = styled.span`
  color: #1e6140;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TextProductDescript = styled.p`
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const WrapCharachtersInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 13px;
`;

export const UrlDecor = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #84c551;
  margin-right: 9px;
  margin-left: 7px;
`;
export const ListItemUrl = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const List = styled.ul`
  display: flex;
  gap: 5px;
  list-style: none;
  justify-content: center;
  align-items: center;
  margin-top: 46px;
  margin-bottom: 8px;
`;

export const TextFilter = styled.p`
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
