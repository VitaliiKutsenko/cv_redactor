import styled from 'styled-components';
import { theme } from '../../style/theme/theme';

export const LoginWrapper = styled.button`
  position: relative;
  width: fit-content;
  height: fit-content;
  padding: 10px;
  color: ${theme.colors.white};
  cursor: pointer;
  font-size: 20px;
  margin-right: 20px;
  border-radius: 5px;
  border: none;
  box-shadow: inset 0px 2px 50px 0px green;
  transition: 0.3s linear;
  &&:hover {
    box-shadow: inset 22px 2px 50px 0px green;
    transition: 0.3s linear;
  }
  &&.fade {
    visibility: hidden;
  }
  &&.visible {
    visibility: visible;
  }
`;
