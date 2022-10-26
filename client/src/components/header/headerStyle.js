import styled from 'styled-components';
import { theme } from '../../style/theme/theme';

export const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100vw;
  height: 80px;
  background: darkcyan;
  display: flex;
  justify-content: space-between;
  align-items: center;

  && svg {
    position: relative;
    margin: 24px 0 31px 100px;
  }
`;
