import styled from 'styled-components';
import { Swiper } from 'swiper/react';
export const StyledSwiper = styled(Swiper).attrs({
  containerModifierClass: 'custom-swiper-container',
})`
  width: 1110px;
  height: 444px;

  .swiper-slide {
    width: 255px;
    height: 355px;
    background: #fff;
    border-radius: 20px;
    padding: 10px;
  }
  .swiper-pagination {
    align-items: end;
    display: flex;
    justify-content: center;
  }
  .swiper-pagination-bullet {
    width: 6px;
    height: 16px;
    background-color: rgba(141, 50, 0, 0.1);
    opacity: 1;
    transition: opacity 0.2s ease;
    border-radius: 20px;

    &.swiper-pagination-bullet-active {
      width: 6px;
      height: 30px;
      opacity: 0.8;
      border-radius: 20px;
      background-color: #8d3200;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    border-radius: 50%;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    content: '';
  }
`;
export const NewsSection = styled.section`
  padding-bottom: 120px;
`;

export const Container = styled.div`
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
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

export const ItemTitle = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
`;

export const IteamStock = styled.p`
  color: #1e6140;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
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

export const CustomBtnPrev = styled.button`
  border-radius: 40px;
  border: 1px solid #84c551;
  padding: 12px;
  background-color: transparent;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  fill: #84c551;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #84c551;
    stroke: #fff;
    fill: #fff;
  }
  svg {
    width: 20px;
    height: 20px;
  }
  margin-right: 80px;
`;
export const CustomBtnContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomBtnNext = styled.button`
  border-radius: 40px;
  border: 1px solid #84c551;
  padding: 12px;
  background-color: transparent;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  fill: #84c551;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #84c551;
    stroke: #fff;
    fill: #fff;
  }
  svg {
    width: 20px;
    height: 20px;
  }
  margin-left: 80px;
`;