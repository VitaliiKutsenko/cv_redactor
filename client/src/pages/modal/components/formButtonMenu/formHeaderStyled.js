import styled from 'styled-components';

export const FormHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to left, ${({ color }) => color || 'gray'}, white 70%);
  border-radius: 15px 15px 0 0;

  & .header_label {
    margin: 10px;
  }
  & .button_menu {
    display: flex;
    padding: 5px;
    & button {
      margin: 10px;
      border-radius: 1px;
      &:hover svg {
        transform: rotateY(180deg);
      }
    }
  }
`;
