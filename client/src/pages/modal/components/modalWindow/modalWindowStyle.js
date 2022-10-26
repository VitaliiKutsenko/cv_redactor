import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: rgba(160, 146, 146, 0.37);
  transition: 0.5s linear;
  & .modal_list__content {
    background: red;
    min-width: 60vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: rgba(255, 255, 255, 0.69);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    margin-right: 10px;
    overflow: auto;
  }
  & .modal {
    height: 100%;
    padding: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: rgba(255, 255, 255, 0.69);
    backdrop-filter: blur(10px);
    border-radius: 10px;

    & .modal_header {
      width: 100%;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
    }
  }
`;
