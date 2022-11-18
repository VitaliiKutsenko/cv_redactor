import React, { useEffect, useState } from 'react';
import { FormComponent } from '../../../components/formComponent/formComponent';
import { signInFields } from './signInFields';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../store/auth/authLogin/loginActions/authActions';
import { MessageWindow } from '../../../components/messageWindow/messageWindow';
import { AuthWrapper } from '../authStyle';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/button/button';
import { CustomLink } from '../../../components/navLinks/customLink';

export const SignIn = () => {
  const signInDispatch = useDispatch();
  const { auth } = useSelector(store => store || []);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.auth?.data) {
      navigate('/');
    }
  }, [auth]);

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
          <CustomLink to="/auth/forgot-password">Forgot password?</CustomLink>
        </div>
      </FormComponent>
      <MessageWindow content={auth} />
    </AuthWrapper>
  );
};
