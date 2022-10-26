import styled from 'styled-components';
import { theme } from '../../style/theme/theme';

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  background: ${theme.colors.darkGrey};

  .navigate-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }
  .navigate-wrapper button {
    width: fit-content;
    //height: auto;
  }
`;
