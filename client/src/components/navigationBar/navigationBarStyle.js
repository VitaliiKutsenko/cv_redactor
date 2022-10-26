import styled from 'styled-components';
import { theme } from '../../style/theme/theme';

export const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${theme.colors.lightGray};

  && .navigation-container {
    height: 200px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    background: ${theme.colors.darkGrey};
    justify-content: space-between;
    padding: 0 100px 24px;
  }

  && a {
    font-size: 32px;
    color: white;
    padding-right: 56px;
    cursor: pointer;
  }

  @media (max-width: ${theme.screensWidth.desktop}) {
    && .navigation-container {
      padding: 0 20px 24px;
    }
  }
`;
