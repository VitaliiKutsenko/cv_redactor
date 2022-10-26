import styled from 'styled-components';

export const ProgressBarWrapper = styled.div`
  & .progress {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .progress_1 {
    position: relative;
    width: 14em;
    height: 7em;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  & .progress_1::after {
    content: '';
    position: absolute;
    width: 10em;
    height: 5em;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    background-color: white;
  }

  & .progress_1::before {
    content: '';
    top: 0;
    position: absolute;
    width: 15em;
    height: 15em;
    border-radius: 50%;
    background: conic-gradient(
      ${({ fieldLength, fields }) => {
        const percent = Math.round((100 / fields.length) * fieldLength);

        if (percent <= 25) {
          return 'transparent 50%,yellow,red';
        } else if (percent <= 50) {
          return 'transparent 50%,red,yellow';
        } else if (percent <= 75) {
          return 'transparent 50%,yellow,green';
        } else if (percent <= 100) {
          return 'transparent 50%,green';
        }
      }}
    );
    transition: 1s linear;
    transform: rotate(
      ${({ fieldLength, fields }) => {
        return 270 + Math.round(180 / fields.length) * fieldLength;
      }}deg
    );
  }
`;
