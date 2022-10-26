import React, { useLayoutEffect, useRef, useState } from 'react';
import { ButtonFormWrapper } from './buttonFormStyled';

export const ButtonForm = ({ circle, children, id, content, ...props }) => {
  const buttonRef = useRef();
  const [circledElem, setCircledElem] = useState('');

  useLayoutEffect(() => {
    if (circle) {
      const computedElem = getComputedStyle(buttonRef.current)[circle];

      setCircledElem(computedElem);
    }
  }, [circle]);

  return (
    <ButtonFormWrapper circled={circledElem} ref={buttonRef} id={id} {...props}>
      <div>{content || children}</div>
    </ButtonFormWrapper>
  );
};
