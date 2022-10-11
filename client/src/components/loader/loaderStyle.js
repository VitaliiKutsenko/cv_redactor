import styled from 'styled-components';
import { keyframes } from 'styled-components';

const circleAnimation = keyframes`
100%{
  background-position: -100% 0;
}
`;

export const LoaderWrapper = styled.div.attrs([props => ({ className: props.className })])`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 200px;
  &&.fade {
    opacity: 1;
    transition: 0.5s linear;
  }
  &&.visible {
    opacity: 0;
    transition: 0.5s linear;
  }
  && .skeleton-container {
    max-width: 90%;
  }

  && .skeleton-text {
    border-radius: 5px;
    width: 100%;
    height: 32px;
  }

  && .skeleton-info {
    width: 7%;
  }

  && .skeleton-technology {
    display: inline;
    width: 100%;
    height: 32px;
  }

  && .skeleton-container-footer {
    border-top: 1px solid #e5e5e5;
  }

  && .skeleton-footer {
    width: 50%;
    height: 32px;
    border: 1px solid #e5e5e5;
  }

  && .skeleton-footer svg {
    display: none;
  }

  && .skeleton {
    background: linear-gradient(120deg, #d5d5d5 30%, #f0f0f0 38%, #f0f0f0 40%, #d5d5d5 48%);
    background-size: 200% 100%;
    background-position: 100% 0;
    opacity: 0.7;
    animation: ${circleAnimation} 1.5s infinite;
    color: rgba(255, 255, 255, 0);
  }
`;
