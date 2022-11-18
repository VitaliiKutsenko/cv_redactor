import styled from 'styled-components';

export const CvWrapper = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
  height: calc(100% - 80px);
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 35% auto;

  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  //background: linear-gradient(darkcyan, grey);
`;
