import styled from 'styled-components';
export const WrapSideBar = styled.div`
  display: flex;
  align-items: center;
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
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #8c3213;
    stroke: #fff;
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
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #8c3213;
    stroke: #fff;
  }
`;

export const TextMoney = styled.p`
  color: #000;
  font-size: 12px;
  font-family: Montserrat;
  font-weight: 700;
`;
