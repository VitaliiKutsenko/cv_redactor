import styled from 'styled-components';

export const CvWrapper = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
  height: calc(100% - 80px);
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 35% auto;
  //align-items: center;
  //justify-content: center;
  padding: 10px;
  background: linear-gradient(darkcyan, grey);
`;
