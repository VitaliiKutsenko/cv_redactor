import React, { useEffect, useState } from 'react';
import { HeaderWrapper } from './headerStyle';
import Logo from './../../../public/svg/Vector.svg';
import { Link } from 'react-router-dom';
import { Login } from '../Login/login';
import { GlassEffectStyled } from '../styledComponent/glassEffectStyled';
import { AddBlock } from '../../pages/cv/components/addBlock/addBlock';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <span>Резюме</span>
      </Link>
      <AddBlock />

      <Login />
    </HeaderWrapper>
  );
};

export default Header;
