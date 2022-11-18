import styled from 'styled-components';

export const FormHeaderWrapper = styled.div.attrs(props => {
  return {
    borderRadius: props.showForm ? '15px 15px 0 0' : '15px',
    colors: props.themes,
  };
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    to right bottom,
    white 20%,

    ${({ color }) => color || 'gray'}
  );
  border-radius: ${props => props.borderRadius};

  & .header_label {
    margin: 10px;
  }

  & .button_menu {
    display: flex;
    padding: 5px;

    & button {
      margin: 10px;
      border-radius: 5px;

      &:hover {
        //box-shadow: 0 0 -1px -1px black, inset 0 0 1px 1px black;
        //border-radius: 5px;
        //background: rgba(255, 255, 255, 0.7);
      }

      &:hover svg {
        transform: rotateY(180deg);
      }
    }
  }
`;
