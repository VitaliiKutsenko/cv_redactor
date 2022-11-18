import React from 'react';
import { NavLinksWrapper } from './customLinkStyled';
import { Link, NavLink } from 'react-router-dom';

export const CustomLink = ({ children, ...props }) => {
  return (
    <NavLinksWrapper {...props}>
      <Link {...props}>{children}</Link>
    </NavLinksWrapper>
  );
};
