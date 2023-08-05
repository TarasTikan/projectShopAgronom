import styled from 'styled-components';

export const BtnBackToTop = styled.div`
  position: fixed;
  bottom: 20px;
  right: 10px;
  height: 90px;
  width: 90px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: ${props =>
    props.scrollPercentage > 0 ? '#d7d7d7' : '#fff'};
  opacity: 0.8;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const ArrowIcon = styled.span`
  font-size: 50px;
  color: #000;
  display: grid;
  place-items: center;
  z-index: 2;
`;

export const WhiteBackground = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #fff;
  z-index: 1;
`;

export const ProgressCircle = styled.span`
  position: absolute;
  top: -4px;
  left: -4px;
  width: 98px;
  height: 98px;
  border-radius: 50%;
  background: ${props =>
    `conic-gradient(#e74e13 0%, #84be51 ${props.scrollPercentage}%, #d7d7d7 ${props.scrollPercentage}% 100%)`};
  clip-path: ${props =>
    `polygon(${
      360 * (props.scrollPercentage / 100)
    }% 0, 100% 0, 100% 100%, 0 100%, 0 0)`};
  z-index: 0;
`;
