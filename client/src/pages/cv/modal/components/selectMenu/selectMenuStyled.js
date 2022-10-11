import styled from 'styled-components';

export const SelectMenuWrapper = styled.div`
  width: 60%;
  position: relative;
  height: 100%;
  & .select_button {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 14px;
    background: white;
    //padding: 5px;
    width: 100%;
    min-height: 50px;
    cursor: pointer;
  }

  & .select_content {
    z-index: 10;
    width: 100%;
    height: content-box;
    overflow: hidden;
    position: absolute;
    &.hidden {
      transition: 0.3s linear;
      visibility: hidden;
    }

    &.show {
      transition: 0.3s linear;
      visibility: visible;
    }
  }

  & .select_list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: rgba(255, 255, 255, 0.92);
    border-radius: 5px;
    width: 100%;

    &.hidden {
      transition: 0.3s linear;
      transform: translateY(-100%);
      visibility: hidden;
    }

    &.show {
      transition: 0.3s linear;
      transform: translateY(0%);
      visibility: visible;
    }
  }

  & .select_lists {
    margin-top: 5px;
    border-radius: 5px;
    width: 95%;
    height: 50px;
    font-size: 18px;
    padding: 5px;
    border: 1px solid rgba(206, 187, 187, 0.66);
    background: white;
    cursor: pointer;
    transition: 0.5s linear;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &:nth-last-child(1) {
      margin-bottom: 5px;
    }

    &:hover {
      transition: 0.5s linear;
      box-shadow: inset 1000px 0 10px 0 rgba(128, 128, 128, 0.22);
    }
  }
`;
