import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const ButtonWrapper = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  background: ${theme.colors.white};
  border: none;
  font-size: 18px;
  line-height: 24px;
  margin-top: ${theme.offsets['5x']};
  cursor: pointer;
  && svg {
    width: 18px;
    height: 18px;
  }
  && a {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  &&:hover {
    background: radial-gradient(white, #dfd4d4);
  }
`;
