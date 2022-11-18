import styled from 'styled-components';
import { theme } from '../../style/theme/theme';

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & label {
    font-size: 18px;
    color: black;
  }

  & .inputWrapper {
    width: 50%;
    display: flex;

    & input {
      margin: 10px;
      width: 100%;
      transition: 0.3s linear;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: relative;
      background: white;
      resize: none;
      padding: 5px 10px 5px 10px;
      font-size: 18px;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.26);
      border-radius: 5px;

      &:hover {
        transition: 0.3s linear;

        box-shadow: inset 0px 0px 3px 1px rgba(177, 177, 177, 0.6);
      }

      &:focus {
        transition: 0.3s linear;
        box-shadow: inset 0px 0px 3px 1px rgba(151, 151, 151, 0.5);
      }
    }

    & .buttonPass {
      background: none;
      border: none;
      cursor: pointer;

      &.show svg {
        fill: rgba(0, 128, 0, 0.5);
        width: 30px;
      }

      &.hide svg {
        fill: rgba(255, 99, 71, 0.5);
        width: 30px;
      }
    }
  }

  & p {
    position: absolute;
    color: white;
    padding-top: 2px;
    display: block;
    right: 0;
  }
`;
