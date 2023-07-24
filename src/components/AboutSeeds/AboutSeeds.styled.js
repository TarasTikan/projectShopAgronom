import styled from 'styled-components';
import bgSeedsImg from '../../assets/images/aboutsemens.jpg'
export const SeedsSection = styled.section`
  background-image: url(${bgSeedsImg});
  padding-top: 109px;
  padding-bottom: 120px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const TitleSeeds = styled.h1`
  color: #fff;
  font-family: Montserrat;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const WrapTitleSeeds = styled.div`
display: flex;
align-items: center;
gap: 17px;`


export const SeedListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  list-style: none;
  width: 1110px;
  height: 324px;
  margin-top: 16px;
`;

export const SeendText = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;