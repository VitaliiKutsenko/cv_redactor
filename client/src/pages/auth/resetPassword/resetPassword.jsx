import React from 'react';
import { FormComponent } from '../../../components/formComponent/formComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setEmailResetAction } from '../../../store/actions/authActions/resetPassword/resetPasswordActions';
import { resetPasswordFields } from './resetPasswordFields';
import { MessageWindow } from '../../../components/messageWindow/messageWindow';
import { resetPasswordSelect } from '../../../store/selectors/selectors';
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
