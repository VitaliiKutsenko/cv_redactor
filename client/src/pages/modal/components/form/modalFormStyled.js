import styled, { keyframes } from 'styled-components';

export const ModalFormWrapper = styled.div`
  height: fit-content;
  width: content-box;
  margin: 10px;

  & form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    background: linear-gradient(to left bottom, ${({ color }) => color || 'grey'}, ${props =>
  props.themes} 50%);
    border-radius: 0 0 15px 15px;
    padding: 10px;
    position: relative;
    transition: 0.3s linear;

    &.hide {
      opacity: 0;
      transition: 0.3s linear;
    }

    &.show {
      opacity: 1;
      transition: 0.3s linear;
    }

    & ul {
      width: 100%;
      height: fit-content;
      overflow: visible;
    }

    & .form_button__wrapper {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: row;
      //justify-content: space-between;
      height: fit-content;

    }
`;
