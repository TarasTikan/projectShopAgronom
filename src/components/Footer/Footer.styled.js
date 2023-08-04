import styled from 'styled-components';
export const ImgLogo = styled.img`
  margin-right: 30px;
`;
export const FooterSection = styled.footer`
  background-color: #fff;
  padding-top: 120px;
  padding-bottom: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  gap: 70px;
  margin-bottom: 118px;
`;

export const LogoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 221px;
  list-style: none;
  gap: 15px;
  align-items: start;
`;

export const LogoText = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
`;

export const WrapInformation = styled.ul`
  display: flex;
  flex-direction: column;
  width: 221px;
  list-style: none;
  gap: 22px;
  align-items: start;
`;

export const TextInformation = styled.p`
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
`;

export const TitleInformation = styled.h3`
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const ContactText = styled.p`
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
`;

export const ContactLink = styled.p`
  color: #84be51;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  text-decoration-line: underline;
`;

export const CallBtn = styled.button`
  border-radius: 40px;
  border: 1px solid #8c3213;
  padding: 12px;
  background-color: transparent;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  fill: #8c3213;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #8c3213;
    stroke: #fff;
    fill: #fff;
  }
`;

export const ItemContact = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const FooterText = styled.p`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
`;

export const ContainerDecoration = styled.div`
  width: 1110px;
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
  margin-bottom: 17px;
`;

export const WrapDecoration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapDecorationAll = styled.div`
  display: flex;
  position: relative;
`;

export const ElementsDecoration = styled.div`
  width: 65px;
  height: 150px;
  flex-shrink: 0;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: none;
  border-bottom-right-radius: none;
  background: #84c551;
  position: absolute;
  bottom: -20px;
  left: 1168px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-bottom: auto;
    margin-top: 30px;
  }
`;
