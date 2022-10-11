import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const MainLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  background: ${theme.colors.lightGray};

  && .content-container {
    display: flex;
    background: ${theme.colors.lightBlack};
    height: 100vh;
    overflow: auto;
  }

  .fade.entering {
    opacity: 1;
  }

  .fade.entered {
    opacity: 1;
    transition: opacity 1s linear;
  }

  .fade.exited {
    opacity: 0.3;
    transition: opacity 1s linear;
  }

  .fade.exiting {
    transition: opacity 1s linear;
    opacity: 0.6;
  }
`;
