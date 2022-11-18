import React, { useEffect, useState } from 'react';
import { HeaderWrapper } from './headerStyle';
import { Link, useNavigate } from 'react-router-dom';
import { Login } from '../../../../components/Login/login';
import { AddBlock } from '../../../cv/components/addBlock/addBlock';
import { useDispatch } from 'react-redux';
import { getApiCvData } from '../../../../store/cv/cvUserCollection/apiCvDataActions';
import { getAllUserFields } from '../../../../store/cv/cvAllUserFields/cvAllUserFieldsActions';

const Header = () => {
  const [modalState, setModalState] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <Link to="/">
        <span>Резюме</span>
      </Link>
      <AddBlock onClick={() => navigate('modal')} />
      {/*<button onClick={() => dispatch(getApiCvData())}>get api</button>*/}
      <Login />
    </HeaderWrapper>
  );
};

export default Header;
