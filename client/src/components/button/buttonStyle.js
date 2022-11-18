import styled from 'styled-components';
import { theme } from '../../style/theme/theme';

export const ButtonWrapper = styled.button`
  position: relative;
  cursor: pointer;
  padding: ${theme.buttons.padding};
  font-size: ${theme.buttons.fontSize};
  border-radius: ${theme.buttons.radius};
  margin-left: 40px;
  transition: 0.3s linear;

  & svg {
    width: ${theme.buttons.svg.width};
  }

  & a {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  &:hover {
    transition: 0.3s linear;
    box-shadow: inset 0 50px 115px 0 rgba(149, 255, 149, 0.5),
      inset 0 -50px 1px 1px rgba(0, 0, 0, 0.2);
  }
`;
