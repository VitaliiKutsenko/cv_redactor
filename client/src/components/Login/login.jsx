import React, { useEffect, useLayoutEffect, useState } from 'react';
import { LoginWrapper } from './loginStyle';
import { useNavigate } from 'react-router-dom';
import { Logout } from './logout';

export const Login = () => {
  const [login, setLogin] = useState(false);
  const [logOut, setLogOut] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    if (token) {
      setLogin(true);
    }
  }, [token]);

  const handleSignOut = e => {
    e.stopPropagation();

    if (!login) {
      navigate('/auth/sign-in');
    } else {
      setLogOut(prev => !prev);
    }
  };

  return (
    <LoginWrapper onClick={e => handleSignOut(e)}>
      <span>{!login ? 'Login' : 'Logout'}</span>

      {logOut && <Logout logoutFn={setLogOut} />}
    </LoginWrapper>
  );
};
