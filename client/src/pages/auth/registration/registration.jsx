import React, { useEffect } from 'react';
import { FormComponent } from '../../../components/formComponent/formComponent';
import { registrationFields } from './registrationFields';
import { useDispatch, useSelector } from 'react-redux';
import { MessageWindow } from '../../../components/messageWindow/messageWindow';
import { useNavigate } from 'react-router-dom';
import { setRegistrationDataActions } from '../../../store/auth/authRegistration/registrationActions/registrationActions';
import { AuthWrapper } from '../authStyle';

export const Registration = () => {
  const registrationDispatch = useDispatch();
  const { auth } = useSelector(store => store || []);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (auth?.auth?.data) {
  //     navigate('/');
  //   }
  // }, [auth]);

  return (
    <AuthWrapper>
      <FormComponent
        titleText="Registration"
        inputContent={registrationFields}
        buttonText="Confirm"
        onSubmit={data => registrationDispatch(setRegistrationDataActions(data))}
      />
      <MessageWindow content={auth} />
    </AuthWrapper>
  );
};
