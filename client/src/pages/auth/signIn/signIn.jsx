import React, { useEffect, useState } from 'react';
import { FormComponent } from '../../../components/formComponent/formComponent';
import { signInFields } from './signInFields';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../store/actions/authActions/auth/authActions';
import { MessageWindow } from '../../../components/messageWindow/messageWindow';
import { AuthWrapper } from '../authStyle';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/button/button';

export const SignIn = () => {
  const signInDispatch = useDispatch();
  const { auth } = useSelector(store => store || []);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.auth?.data) {
      navigate('/');
    }
  }, [auth]);

  const handleRegistration = () => {
    navigate('/registration');
  };

  return (
    <AuthWrapper>
      <FormComponent
        titleText="Welcome Back"
        inputContent={signInFields}
        buttonText="Sign in"
        redirectButtonPath="*"
        onSubmit={data => signInDispatch(setUser(data))}
      >
        <div className="navigate-wrapper">
          <Link to="/forgot-password">Forgot password?</Link>
          <Button clickFn={handleRegistration}>Registration</Button>
        </div>
      </FormComponent>
      <MessageWindow content={auth} />
    </AuthWrapper>
  );
};
