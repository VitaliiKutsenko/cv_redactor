import React, { useEffect, useState } from 'react';
import { HeaderWrapper } from './headerStyle';
import Logo from './../../../public/svg/Vector.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Login } from '../Login/login';
import { GlassEffectStyled } from '../styledComponent/glassEffectStyled';
import { AddBlock } from '../../pages/cv/components/addBlock/addBlock';
import { Modal } from '../../pages/modal/modal';

const Header = () => {
  const [modalState, setModalState] = useState(false);
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Link to="/">
        <span>Резюме</span>
      </Link>
      <AddBlock onClick={() => navigate('modal')} />

      <Login />
    </HeaderWrapper>
  );
};

export default Header;
