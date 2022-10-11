import styled from 'styled-components';
import { theme } from '../../../../../../theme/theme';

export const ModalInputFormWrapper = styled.li`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 10px 0;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  & label {
    padding-right: 10px;
    display: flex;
    min-width: 40%;
    justify-content: flex-start;
    align-items: center;
  }

  & .input_wrapper {
    width: 50%;
    height: content-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-radius: 10px;
    & input {
      background: white;
      width: 100%;
      height: 100%;
      padding: 5px;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.26);
      z-index: 1;
      border-radius: 10px;
    }

    & textarea {
      overflow: hidden;
      position: relative;
      background: white;
      //width: 100%;
      resize: none;
      padding: 5px 10px 10px 5px;
      font-size: 15px;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.26);
      border-radius: 10px;
    }

    & input:focus,
    textarea:focus {
      transition: 0.5s linear;
      background: white;
      box-shadow: inset 1000px 110px 10px 0 rgba(128, 128, 128, 0.22);
    }

    & .point {
      width: 30px;
      height: 100%;
      position: absolute;
      border-radius: 5px;
      transform: translateX(0px);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      transition: 1s linear;
      transition-delay: 0.5s;
      opacity: 0;
    }

    & .point.active {
      transform: translateX(-125px);
      transition: 1s linear;
      background-color: green;
      opacity: 1;
    }

    & .point.active::after {
      content: '✔';
      color: white;
      text-align: center;
      padding-left: 1px;
    }

    & .point.error {
      transform: translateX(-125px);
      transition: 1s linear;
      background-color: tomato;
      opacity: 1;
    }

    & .point.error:hover {
      cursor: pointer;
      width: 30%;
      position: absolute;
      transform: translateX(-155px);
      transition: 1s linear;
      background-color: tomato;
      opacity: 1;
    }

    & .point.error::after {
      content: '!';
      font-size: 24px;
      color: black;
      text-align: center;
      padding-left: 5px;
    }

    & .point.error::after:hover {
      content: '';
    }
  }
  & .date_wrapper {
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-radius: 10px;
    margin-right: 10px;

    & .date {
      width: fit-content;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & .input_wrapper {
      background: white;
      width: 100%;
      justify-self: flex-end;
      margin: 10px;
      min-width: 80px;
      flex-wrap: wrap;
      z-index: 100;
    }
  }
`;
