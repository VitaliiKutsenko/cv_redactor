import React, { useEffect } from 'react';
import { FormComponent } from '../../../components/formComponent/formComponent';
import { registrationFields } from './registrationFields';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../store/actions/authActions/auth/authActions';
import { MessageWindow } from '../../../components/messageWindow/messageWindow';
import { RegistrationWrapper } from './registrationStyle';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/button/button';
import { setRegistrationDataActions } from '../../../store/actions/authActions/registration/registrationActions';

export const Registration = () => {
  const registrationDispatch = useDispatch();
  const { auth } = useSelector(store => store || []);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.auth?.data) {
      navigate('/');
    }
  }, [auth]);

  return (
    <RegistrationWrapper>
      <FormComponent
        titleText="Регистрация"
        inputContent={registrationFields}
        buttonText="Подтвердить"
        redirectButtonPath="/"
        onSubmit={data => registrationDispatch(setRegistrationDataActions(data))}
      ></FormComponent>
      <MessageWindow content={auth} />
    </RegistrationWrapper>
  );
};
