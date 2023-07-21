import styled from 'styled-components';
import bgPlantsInfo from '../../assets/images/happy-farmer-in-the-corn.jpg';
export const SectionPlants = styled.section`
  background-image: url(${bgPlantsInfo});
  padding-top: 109px;
  padding-bottom: 108px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const WrapTitle = styled.div`
  display: flex;
  gap: 17px;
  align-items: center;
  justify-content: center;
`;

export const ImageDecoration = styled.img`
  width: 32px;
  height: 25px;
`;

export const TitlePlants = styled.h1`
  color: #fff;
  font-family: Montserrat;
  font-size: 45px;
  font-weight: 700;
`;

export const DescriptionPlants = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
`;

export const WrapDescrtiption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 1110px;
  height: 212px;
`;
