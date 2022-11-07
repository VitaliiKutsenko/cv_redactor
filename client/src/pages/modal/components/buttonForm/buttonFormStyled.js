import styled from 'styled-components';

export const ButtonFormWrapper = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  max-width: 100px;
  //border-radius: 50%;
  cursor: pointer;
  background: transparent;
  transition: 0.5s linear;

  & svg {
    //border-radius: 50%;
    width: 30px;
    height: fit-content;
    background: transparent;
    transition: 0.5s linear;
    transform: rotate(0deg);
  }
  &:hover svg {
    transition: 0.5s linear;
    transform: rotate(90deg);
    background: transparent;
    fill: ${({ fillColor }) => fillColor || 'red'};
  }
`;
