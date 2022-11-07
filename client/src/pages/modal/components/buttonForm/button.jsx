import React, { useLayoutEffect, useRef, useState } from 'react';
import { ButtonFormWrapper } from './buttonFormStyled';

export const ButtonForm = ({ children, content, ...props }) => {
  return <ButtonFormWrapper {...props}>{content || children}</ButtonFormWrapper>;
};
