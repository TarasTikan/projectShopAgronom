import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const ProductList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
`;


export const ProductItem = styled.li`
  width: 255px;
  height: 355px;
  background: #fff;
  border-radius: 20px;
  padding: 10px;
  width: calc((100% - 30px) / 4);
  flex-grow: 3;
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
  font-weight: 600;
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