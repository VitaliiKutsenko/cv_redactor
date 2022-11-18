import styled from 'styled-components';

export const AuthRouterWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  background: rgba(160, 146, 146, 0.37);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  & .auth_modal {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;

    & .auth_modal__header {
      width: 100%;
      background: black;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;

      & .auth_modal__buttonGoBack {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 50px;
        width: fit-content;
        background: transparent;
        border: none;
        cursor: pointer;
        transition: 0.3s linear;

        &:hover svg {
          transform: rotateY(-180deg);
        }

        & svg {
          fill: rgba(255, 255, 255, 0.75);
          transition: 0.3s linear;
          width: 42px;
          height: 42px;
        }
      }
    }

    & .auth_modal__body {
      height: 100%;
    }
  }
`;
