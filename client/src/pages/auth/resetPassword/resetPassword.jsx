import React from 'react';
import { FormComponent } from '../../../components/formComponent/formComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setEmailResetAction } from '../../../store/auth/authResetPassword/resetPasswordActions/resetPasswordActions';
import { resetPasswordFields } from './resetPasswordFields';
import { MessageWindow } from '../../../components/messageWindow/messageWindow';
import { resetPasswordSelect } from '../../../selectors/authSelectors';
import { AuthWrapper } from '../authStyle';

export const ResetPassword = () => {
  const resetPasswordDispatch = useDispatch();
  const resetPassword = useSelector(resetPasswordSelect);

  return (
    <AuthWrapper>
      <FormComponent
        titleText="Forgot your password?"
        inputContent={resetPasswordFields || {}}
        buttonText="Reset password"
        redirectButtonPath="/"
        onSubmit={data => resetPasswordDispatch(setEmailResetAction(data)) || {}}
      />
      <MessageWindow content={resetPassword} />
    </AuthWrapper>
  );
};
