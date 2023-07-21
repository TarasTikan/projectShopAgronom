import styled from 'styled-components';
import backgroundImage from '../../assets/images/heroBg.jpg'
export const HeroSection = styled.section`
  background-image: url(${backgroundImage});
  background-size: cover;
  padding-top: 20px;
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 300px;
`;

export const Container = styled.div`
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const TitleHeroSpan = styled.span`
  color: #000;
  font-size: 55px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 67.05px;
`;

export const HeroTextTitle = styled.h1`
  color: #000;
  font-size: 55px;
  font-family: Montserrat;
  font-weight: 300;
  line-height: 67.05px;
`;
export const WrapHeroText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 187px;
  width: 605px;
  height: 262px;
  padding-left: 44px;
`;

export const HeroDescription = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 21.94px;
  margin-top: 28px;
  margin-bottom: 23px;
`;
export const BtnCompany = styled.button`
  border-radius: 90px;
  background-color: #e74e13;
  width: 220px;
  height: 47px;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-family: Montserrat;
  border: none;
  font-weight: 700;
  line-height: 20px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #ba3c0b;
  }
`;;


export const MainImageDecor = styled.img`
  width: 700px;
  height: 650px;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  position: absolute;
  top: 46%;
  right: 0%;
`;

export const MainConent = styled.div`
display: flex;
`;
