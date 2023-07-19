import styled from 'styled-components';
export const PlantsSection = styled.section`
padding-bottom: 122px;
`;

export const Container = styled.div`
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;
export const UrlList = styled.ul`
  display: flex;
  gap: 5px;
  list-style: none;
  justify-content: center;
  align-items: center;
  margin-top: 46px;
  margin-bottom: 8px;
`;

export const WrapTitle = styled.div`
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: center;
  margin-bottom: 37px;
`;

export const ListCatalog = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  justify-content: center;
  align-items: center;
  margin-top: 46px;
  margin-bottom: 8px;
  flex-wrap: wrap;
`;

export const CatalogItem = styled.li`
  width: 255px;
  height: 164px;
  background-color: #84c551;
  border-radius: 20px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
`;

export const WrapTextItem = styled.div`
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  width: 255px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
margin-top: 115px;
`;

export const TitleCatalog = styled.h1`
  font-family: Montserrat;
  font-size: 45px;
  font-weight: 700;
  line-height: 55px;
  letter-spacing: 0em;
  text-align: left;
  color: #000;
`;

export const RoteteImg = styled.img`
  transform: rotate(80deg);
`;