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
`;
export const SelectTriggerWrapper = styled.li.attrs(props => {
  return { theme: props.theme };
})`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
  width: 90%;
  font-size: 18px;
  border: 1px solid rgba(206, 187, 187, 0.66);
  cursor: pointer;
  transition: 0.2s linear;
  perspective: 600px;
  overflow: hidden;
  box-shadow: inset 1px 1px 1px 100px #f2f3f4;

  & svg {
    fill: rgba(0, 0, 0, 0.5);
    width: 32px;
    height: 32px;
    opacity: 0;
    transform: rotateY(180deg) translateX(-100px);
    transition: 0.3s linear;
  }

  &.active {
    transition: 0.3s linear;
    width: 100%;
    background: rgba(255, 255, 255, 0.47);
    box-shadow: inset 0 0 100px 1px ${props => props.theme || 'red'};

    & svg {
      transition: 0.3s linear;
      opacity: 1;
      transform: rotate(0deg) translateX(0);
    }
  }

  &.hide:hover {
    transition: 0.2s linear;
    transform: translateX(10px);
  }
`;
