import { combineReducers } from 'redux';
import { auth } from './auth/authLogin/authReducer';
import { resetPassword } from './auth/authResetPassword/resetPasswordReducer';
import { registration } from './auth/authRegistration/registrationReducer';
import { cvData } from './localCvCards/cvDataReducer';
import { apiUserReducer } from './cv/cvUserCollection/apiCvDataReducer';
import { cvUserCards } from './cv/cvUserCards/cvUserCardsReducer';
import { cvAllUserFields } from './cv/cvAllUserFields/cvAllUserFieldsReducer';

export const reducer = combineReducers({
  auth,
  resetPassword,
  registration,
  cvData,
  apiUserReducer,
  // apiUserDataReducer: cvUserCards,
  cvUserCards,
  cvAllUserFields,
});
