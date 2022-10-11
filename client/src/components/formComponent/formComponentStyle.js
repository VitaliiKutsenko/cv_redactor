import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  max-width: 603px;
  && h1 {
    margin-bottom: 48px;
    font-size: 48px;
    line-height: 56px;
    color: ${theme.colors.white};
    display: inline-block;
    font-weight: 600;
  }
  && a {
    display: block;
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 22px;
    text-decoration: none;
    font-style: normal;
    color: white;
  }
  && form {
    max-width: 503px;
  }
  @media (max-width: 703px) {
    && {
      margin-left: 20px;
      margin-right: 20px;
    }
    && h1 {
      font-size: 28px;
    }
  }
`;
