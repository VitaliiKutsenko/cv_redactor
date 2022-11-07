import styled, { keyframes } from 'styled-components';

export const ModalFormWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 40px;

    & form {
      display: flex;
      flex-direction: column;
      width: 100%;
      background: linear-gradient(to left bottom, ${({ color }) => color || 'grey'}, white 50%);
      border-radius: 0 0 15px 15px;
      padding: 10px;
      position: relative;
      transition: 0.3s linear;

      &.hidden {
        transform: translateY(-100%);
        visibility: hidden;
        transition: 0.3s linear;
        top: 0;
      }

      & ul {
        width: 100%;
        height: fit-content;
        overflow: visible;
      }

      & .form_button__wrapper {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: fit-content;

        & .form_button__submit {
          display: flex;
          justify-content: center;
          align-items: center;

          & svg {
            margin-left: 5px;
            width: 20px;
            height: 20px;

  }
`;
