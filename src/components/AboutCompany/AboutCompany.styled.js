import styled from 'styled-components';
export const HeroSection = styled.section`
  padding-bottom: 108px;
  padding-top: 110px;
`;

export const Container = styled.div`
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  gap: 125px;
  align-items: center;
  justify-content: center;
`;

export const WrapTitle = styled.div`
  display: flex;
  gap: 17px;
  align-items: center;
`;
export const HeadImgAbout = styled.img`
  width: 32px;
  height: 25px;
`;
export const HeadBigImgAbout = styled.img`
  width: 683px;
  height: 557px;
`;
export const AboutTitle = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 15px;
`;

export const ListAboutInfo = styled.ul`
  list-style: none;
  width: 540px;
  height: 382px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

export const AboutInfo = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AboutInfoSpan = styled.span`
  color: #1e6140;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const AboutButton = styled.button`
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 220px;
  height: 47px;
  background-color: #e74e13;
  border-radius: 90px;
  margin-top: 27px;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #ba3c0b;
  }
`;
