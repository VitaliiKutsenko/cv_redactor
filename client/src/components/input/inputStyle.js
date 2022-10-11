import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const InputWrapper = styled.div`
  max-width: 100%;
  min-width: 200px;
  font-family: 'Grotesk', serif;
  position: relative;
  margin-right: 20px;

  && label {
    font-size: 18px;
    //line-height: 20px;
    color: ${theme.colors.lightGray};
  }
  && input {
    position: relative;
    width: 100%;
    border: none;
    border-bottom: 2px solid rgba(148, 148, 148, 0.5);
    background: none;
    outline: none;
    color: white;
    font-size: 24px;
    line-height: 30px;
    //padding: 8px 0 8px 0;
  }

  && input.authFields {
    //margin-bottom: 40px;
  }

  && button {
    background: none;
    border: none;
  }

  && button svg {
    transform: translate(-20px, -16px);
    position: absolute;
    width: 20px;
    height: 16px;
  }
  && p {
    position: absolute;
    color: white;
    padding-top: 2px;
    display: block;
    right: 0;
  }
`;
