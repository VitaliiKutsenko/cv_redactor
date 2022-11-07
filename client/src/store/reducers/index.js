import { combineReducers } from 'redux';
import { auth } from './authReducers/authReducer';
import { resetPassword } from './authReducers/resetPasswordReducer';
import { registration } from './authReducers/registrationReducer';
import { cvData } from './cvReducers/cvDataReducer';

export const reducer = combineReducers({
  auth,
  resetPassword,
  registration,
  cvData,
});
