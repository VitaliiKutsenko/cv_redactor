import styled from 'styled-components';

export const NavLinksWrapper = styled.div`
  padding: 5px;
  width: fit-content;
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  & a {
    font-size: 20px;
    text-decoration: none;
    color: ${({ color }) => color || 'black'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  & a::before {
    content: '';
    width: 0;
    height: 100%;
    border-bottom: 2px solid ${({ color }) => color || 'black'};
    bottom: 0;
    position: absolute;
    transition: 0.3s linear;
  }

  & a:hover::before {
    transition: 0.3s linear;
    width: 100%;
  }
`;
