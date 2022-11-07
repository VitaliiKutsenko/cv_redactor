import styled from 'styled-components';

export const SelectMenuWrapper = styled.div`
  position: relative;
  background: transparent;
  width: 100%;
  height: 100%;
  //padding: 10px;

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
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
    width: 90%;
    font-size: 18px;
    border: 1px solid rgba(206, 187, 187, 0.66);
    background: white;
    cursor: pointer;
    transition: 0.2s linear;
    //box-shadow: 1px 1px 1px 1px black;
    &.active {
      width: 100%;
      //transform: translate(2px, -5px) scale(1.1, 1.1);
    }

    &.active:after {
      transition: 0.2s linear;

      position: absolute;
      right: 0;
      transform: translateX(7px) rotate(45deg);
      content: '';
      width: 20px;
      height: 20px;
      background: white;
    }

    &.hide:hover {
      transition: 0.2s linear;
      transform: translateX(5px);
      box-shadow: -10px 10px 10px -5px #a0a0a0;
    }
  }
`;
