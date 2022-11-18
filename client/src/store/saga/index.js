import { all } from 'redux-saga/effects';
import { resetPasswordWatcher } from '../auth/authResetPassword/resetPasswordSaga';
import { authWatcher } from '../auth/authLogin/authSaga';
import { registrationWatcher } from '../auth/authRegistration/registrationSaga';
import { cvDataWatcher } from '../cv/cvUserCollection/apiCvDataSaga';
import { userCvCardWatcher } from '../cv/cvUserCards/cvUserCardsSaga';
import { cvAllUserFieldsWatcher } from '../cv/cvAllUserFields/cvAllUserFieldsSaga';

export function* rootSaga() {
  yield all([
    resetPasswordWatcher(),
    authWatcher(),
    registrationWatcher(),
    cvDataWatcher(),
    userCvCardWatcher(),
    cvAllUserFieldsWatcher(),
  ]);
}
