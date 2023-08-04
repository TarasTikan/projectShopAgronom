import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  list-style: none;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
`;

export const ProductItem = styled.li`
  width: 255px;
  height: 100%;
  background: #fff;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 195px;
  border-radius: 20px;
  background: rgba(140, 50, 19, 0.06);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 21px;
  padding-bottom: 25px;
`;

export const ItemTitleLink = styled(NavLink)`
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  text-decoration: none;
  font-weight: 600;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #84be51;
  }
`;

export const ItemPrice = styled.h1`
  color: #84be51;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
`;

export const ItemNumber = styled.p`
  color: #000;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
`;

export const IteamStock = styled.p`
  color: #1e6140;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
`;

export const WrapPagination = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

export const BtnBasket = styled.button`
  display: flex;
  width: 47px;
  height: 47px;
  border-radius: 90px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  fill: #8c3213;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    fill: #fff;
    background-color: #8c3213;
  }
`;

export const WrapInfoPrice = styled.div`
  display: flex;
  justify-content: center;
  gap: 69px;
  align-items: center;
`;
