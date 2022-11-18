import styled from 'styled-components';
import { theme } from '../../style/theme/theme';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  width: 100%;
  height: 100%;
  padding: 30px;

  & h3 {
    margin: 40px;
    font-size: 42px;
    color: black;
    display: inline-block;
    font-weight: 600;
  }
  & .form_footer {
    margin-top: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  & a {
    display: block;
    font-size: 18px;
    line-height: 22px;
    text-decoration: none;
    font-style: normal;
    color: black;
  }

  & form {
    width: 100%;
    height: 100%;
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
