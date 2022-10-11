import styled from 'styled-components';

export const AddBlockWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background: rgba(165, 42, 42, 0.21);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  margin: 20px;

  && button {
    width: auto;
    height: 50px;
  }

  & ul {
    list-style: none;
  }

  & li {
    margin-top: 5px;
    padding: 5px;
    border-radius: 5px;
  }

  & li:hover {
    background: linear-gradient(to left, green, rgba(30, 136, 102, 0.88));
    cursor: pointer;
  }
`;
