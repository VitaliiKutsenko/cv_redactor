import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: rgba(160, 146, 146, 0.37);
  transition: 0.5s linear;
  z-index: 1;

  & .modal {
    width: 40vw;
    height: 100%;
    padding: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: rgba(255, 255, 255, 0.69);
    backdrop-filter: blur(10px);
    border-radius: 10px;

    overflow-x: hidden;
    & .modal_header {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    & .button_list {
      padding: 5px;
      width: 90%;
      border: none;
      margin: 5px;
    }
  }
`;
