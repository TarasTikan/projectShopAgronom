import styled from 'styled-components';

export const CheckboxWrapper = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const CheckboxBox = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid ${({ checked }) => (checked ? '#84C551' : '#CCCCCC')};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckboxCheckmark = styled.div`
  width: 9px;
  height: 9px;
  background-color: ${({ checked }) => (checked ? '#84C551' : 'transparent')};
  border: 1px solid ${({ checked }) => (checked ? '#84C551' : '#CCCCCC')};
  border-radius: 1px;
`;
