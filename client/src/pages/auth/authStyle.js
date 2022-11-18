import styled from 'styled-components';
import { theme } from '../../style/theme/theme';

export const AuthWrapper = styled.div`
  position: relative;
  height: 100%;
  background: ${theme.colors.darkGrey};
  & link {
    color: black;
  }
`;
