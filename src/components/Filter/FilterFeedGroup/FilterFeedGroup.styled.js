import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const WrapTitleFilter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
`;
export const ListCatalogName = styled.ul`
  margin-bottom: 30px;
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
export const WrapFilter = styled.div`
  border-radius: 20px 20px 0px 0px;
  width: 255px;
  display: flex;
  padding-bottom: 30px;
  flex-direction: column;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 20px;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 20px;
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
export const FormProducer = styled.form`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding-left: 14px;
  padding-bottom: 23px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  width: 196px;
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
  gap: 12px;
  color: rgba(0, 0, 0, 0.5);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
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

export const FormPrice = styled.form`
  display: flex;
  flex-direction: column;
  width: 196px;
`;

export const TitlePrice = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 17px;
`;

export const PriceInput = styled.input`
  width: 83px;
  height: 29px;
  border: 1px solid #cccccc;
`;

export const PriceLabel = styled.label`
  display: flex;
  color: rgba(0, 0, 0, 0.5);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  gap: 3px;
  line-height: normal;
  flex-direction: column;
`;

export const WrapInput = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;

export const TextWrapInput = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 17px;
`;
