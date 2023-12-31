import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const WrapSideBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;
export const WrapCall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 11px;
  gap: 6px;
`;

export const ListBtn = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 16px;
  margin-left: 57px;
  margin-right: 8px;
`;
export const InputSearch = styled.input`
  width: 320px;
  border-radius: 90px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 19px;
  position: relative;
`;
export const SearchBtn = styled.button`
  position: relative;
  right: 50px;
  border: none;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  background-color: transparent;
  height: 28px;
  padding-left: 14px;
  vertical-align: middle;
  cursor: pointer;
`;
export const ImgLogo = styled.img`
  margin-right: 30px;
`;

export const CallBtn = styled.button`
  border-radius: 40px;
  border: 1px solid #8c3213;
  width: 40px;
  height: 40px;
  background-color: transparent;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  fill: #8c3213;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #8c3213;
    fill: #fff;
  }
`;

export const TextCall = styled.p`
  color: #000;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 400;
  margin-bottom: 3px;
`;

export const TextInfoCall = styled.p`
  cursor: pointer;
  color: #84be51;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 700;
  text-decoration-line: underline;
`;

export const BtnEmotions = styled.button`
  border-radius: 40px;
  border: 1px solid #8c3213;
  width: 40px;
  height: 40px;
  background-color: transparent;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  cursor: pointer;
  fill: #8c3213;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #8c3213;
    fill: #fff;
  }
`;

export const TextMoney = styled.p`
  color: #000;
  font-size: 12px;
  font-family: Montserrat;
  font-weight: 700;
`;
export const ListKatalog = styled.ul`
  display: flex;
  list-style: none;
  gap: 26px;
  align-items: center;
  margin-top: 22px;
  margin-bottom: 46px;
  justify-content: center;
`;

export const KatalogItem = styled.li`
  display: flex;
  gap: 14px;
  align-items: center;
  padding-left: 15px;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid #1e6140;
  width: 200px;
  height: 40px;
  fill: #84be51;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:nth-child(2) {
    gap: 9px;
    padding-left: 15px;
  }
  &:nth-child(3) {
    gap: 4px;
  }
  &:nth-child(4) {
    gap: 8px;
  }
  &:nth-child(5) {
    gap: 5px;
  }

  &:hover {
    background-color: #e74e13;
    stroke: #fff;
    color: #fff;
    fill: #fff;
    border: none;
    cursor: pointer;
    svg {
      fill: #fff;
    }
    a {
      color: #fff;
    }
  }
`;

export const ItemText = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
`;

export const StyledLink = styled(NavLink)`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  text-decoration: none;
  color: #000;
  text-align: left;
  &:hover {
    color: #fff;
  }
`;

export const NumberBasket = styled.p`
  width: 14px;
  height: 14px;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 50%;
  background-color: #84be51;
  position: absolute;
  top: 0;
  right: 0;
`;