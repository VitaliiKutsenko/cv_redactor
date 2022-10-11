import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { theme } from '../../../theme/theme';

const rotate = keyframes`
  0% {transform: rotateX(35deg) rotateY(-45deg) rotateZ(0)}
  20%{transform: rotateX(50deg) rotateY(10deg) rotateZ(0)}
  40%{transform: rotateX(50deg) rotateY(10deg) rotateZ(1turn)}
  60% {transform: rotateX(35deg) rotateY(55deg) rotateZ(0)}
  80%{transform: rotateX(35deg) rotateY(55deg) rotateZ(1turn)}
  100% {transform: rotateX(35deg) rotateY(-45deg) rotateZ(1turn)}
`;

export const SpinnerLoaderWrapper = styled.div.attrs([props => ({ className: props.className })])`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 68px;
  color: white;
  font-weight: bold;
  background: ${theme.colors.darkGrey};
  position: absolute;
  top: 0;
  &&.visible {
    opacity: 1;
    transition: 0.5s linear;
  }
  &&.fade {
    opacity: 0;
    transition: 0.5s linear;
  }
  && div {
    transform: translateX(-2150px);
    animation: 6s ${rotate} infinite;
  }
`;
