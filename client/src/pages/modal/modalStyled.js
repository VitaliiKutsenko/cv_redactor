import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: rgba(160, 146, 146, 0.37);
  transition: 0.5s linear;
  gap: 20px;
  //padding: 10px;

  & .modal_list__content {
    position: relative;
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: rgba(255, 255, 255, 0.69);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 10px;
    overflow: hidden;

    & .progressBar {
      height: 10%;
      width: 100%;
      background: #b8bdbd;
      border-radius: 10px;
    }
  }

  & .modal {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: rgba(255, 255, 255, 0.69);
    backdrop-filter: blur(10px);
    border-radius: 10px;

    & .modal_header {
      border-radius: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
    }
  }
`;
