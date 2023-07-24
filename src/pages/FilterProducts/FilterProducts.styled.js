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
export const FilterSection = styled.section`
padding-bottom: 120px;
padding-top: 20px;
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

export const WrapFilterALL = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 30px;
`;

export const CultureForm = styled.form`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding-left: 30px;
`;

export const NumberForm = styled.form`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding-left: 30px;
`;
