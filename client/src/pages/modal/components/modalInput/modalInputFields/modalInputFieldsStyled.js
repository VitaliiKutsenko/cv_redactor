import styled from 'styled-components';

export const ModalInputFieldsWrapper = styled.li`
  //width: 50%;
  margin: 10px 0;
  background: red;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & textarea {
    width: 100%;
    overflow: hidden;
    position: relative;
    background: white;
    resize: none;
    padding: 5px 10px 10px 5px;
    font-size: 15px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.26);
    border-radius: 10px;
  }
  & button div {
    height: content-box;
  }
`;
