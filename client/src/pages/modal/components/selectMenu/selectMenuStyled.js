import styled from 'styled-components';

export const SelectMenuWrapper = styled.div`
  position: relative;
  background: transparent;
  width: 100%;
  height: 100%;
  & .select_list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }

  & .select_lists {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px;
    margin: 5px;
    border-radius: 5px;
    width: 100%;
    font-size: 18px;
    border: 1px solid rgba(206, 187, 187, 0.66);
    background: white;
    cursor: pointer;
    transition: 0.5s linear;

    &:hover {
      transition: 0.5s linear;
      box-shadow: inset 1000px 0 10px 0 rgba(128, 128, 128, 0.22);
      transform: scale(1.1, 1.1);
    }
  }
`;
