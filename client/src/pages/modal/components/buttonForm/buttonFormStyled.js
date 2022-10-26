import styled from 'styled-components';

export const ButtonFormWrapper = styled.button`
  position: relative;
  width: ${({ circled }) => circled || 'auto'};
  height: 100%;
  //min-width: 25px;
  border: none;
  margin: ${({ margin }) => margin || 0};
  background: transparent;

  & div {
    font-size: ${({ fontSize }) => fontSize || '14px'};
    padding: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ colorStart }) => colorStart || 'tomato'};
    box-shadow: inset 0 2px 50px 0 rgba(255, 255, 255, 0.5);
    border-radius: ${({ borderRadius }) => borderRadius || '15px'};
    overflow: hidden;
    z-index: 1;
    transition: 1s linear;
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to left, rgba(255, 255, 255, 0.43), transparent);
      transform: skew(45deg) translateX(-150%);
      transition: 1s linear;
    }

    &:hover:after {
      transition: 1s linear;
      transform: skew(45deg) translateX(300%);
    }

    &:hover {
      transition: 1s linear;
      background-color: ${({ colorEnd }) => colorEnd || 'red'};
    }
  }
`;
