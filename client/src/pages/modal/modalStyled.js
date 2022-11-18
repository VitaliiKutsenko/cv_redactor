import styled from 'styled-components';

export const ModalWrapper = styled.div.attrs(props => {
  return { theme: props.theme };
})`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: rgba(160, 146, 146, 0.37);
  transition: 0.5s linear;
  gap: 10px;

  & .modal_list__content {
    position: relative;
    width: 30%;
    min-width: 450px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    //padding: 10px;

    & .outlet_wrapper {
      width: 100%;
      height: 100%;
      overflow: hidden;
      margin: 2px;
      border-radius: 10px;
    }
  }

  & .modal {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    margin-left: 10px;
    overflow: hidden;

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
