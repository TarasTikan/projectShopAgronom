import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
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

export const TitleCatalog = styled.h1`
  font-family: Montserrat;
  font-size: 45px;
  font-weight: 700;
  line-height: 55px;
  letter-spacing: 0em;
  text-align: left;
  color: #000;
`;
export const Container = styled.div`
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;
export const WrapNumberProducts = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

export const TitleNumberProducts = styled.h1`
margin-right: auto;
font-family: Montserrat;
font-size: 16px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
`;

export const SortButton = styled.button`
  width: 260px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: #484848;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  align-items: center;
  background-color: #ffff;
  display: flex;
  justify-content: start;
  padding-left: 28px;
`;

export const ListCatalogName = styled.ul`
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
width: 255px;
justify-content: center;
list-style: none;
padding-top: 26px;
padding-bottom: 23px;
padding-left: 30px;
padding-right: 28px;
gap: 20px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
`;


export const StyledLink = styled(NavLink)`
  color: rgba(0, 0, 0, 0.5);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  &.active {
    color: #84c551;
    font-weight: 700;
  }
`;


export const TitleFilter = styled.h1`
  border-radius: 20px 20px 0px 0px;
  background: #84be51;
  width: 255px;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
`;

export const WrapTitleFilter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const WrapFilter = styled.div`
margin-top: 30px;
  border-radius: 20px 20px 0px 0px;
  width: 255px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
`;
export const WrapFilterALL = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 30px;
`;

export const FormProducer = styled.form`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding-left: 30px;
`;
export const CultureForm = styled.form`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding-left: 30px;
`;
export const TitleCulture = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 3px;
  margin-right: auto;
  margin-top: 17px;
`;
export const TitleProducer = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 3px;
  margin-right: auto;
  margin-top: 17px;
`;

export const LabalInput = styled.label`
display: flex;
gap:12px;
 color: rgba(0, 0, 0, 0.50);
font-family: Montserrat;
font-size: 16px;
font-weight: 400;`;

export const NumberForm = styled.form`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding-left: 30px;
`;