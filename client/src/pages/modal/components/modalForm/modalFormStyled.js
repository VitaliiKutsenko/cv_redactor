import styled, { keyframes } from 'styled-components';

export const ModalFormWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & .form_label {
    width: auto;
    height: auto;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-size: 20px;
    background: linear-gradient(to left, ${({ color }) => color || 'gray'}, white 70%);
    position: relative;
    padding: 10px;
    border-radius: 15px 15px 0 0;
    z-index: 1;
    transition-delay: 0.3s;
    transition: min-width 0.5s linear;

    &:hover {
      background-color: rgba(139, 0, 0, 0.31);
    }
    & .buttonForm_wrapper button {
      margin-left: 10px;
    }
    &.show {
      transition: max-width 0.2s linear;
    }

    &.hidden {
      border-radius: 15px 15px;
      transition: max-width 0.2s linear;
      max-width: 70%;
    }
  }

  & .form_wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: content-box;
    position: relative;
    transition: 1s linear;

    & .hidden_wrapper {
      width: 100%;
      transform: translateY(-25px);
      overflow: hidden;
    }

    & form {
      display: flex;
      flex-direction: column;
      width: 100%;
      background: linear-gradient(to left bottom, ${({ color }) => color || 'grey'}, white 50%);
      border-radius: 0 0 15px 15px;
      padding: 40px 10px 10px 10px;
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
        }
      }
    }
  }
`;
