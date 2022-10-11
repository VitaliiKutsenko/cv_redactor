import React, { useEffect, useState } from 'react';
import { SpinnerLoaderWrapper } from './spinnerLoaderStyle';

export const SpinnerLoader = ({ responseStatus }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (responseStatus) {
      setTimeout(() => setFade(true), 500);
    }
  }, [responseStatus]);

  return (
    <SpinnerLoaderWrapper className={!fade ? 'visible' : 'fade'}>
      <div>Techstack</div>
    </SpinnerLoaderWrapper>
  );
};
