import { all } from 'redux-saga/effects';
import { resetPasswordWatcher } from './authSagas/resetPasswordSaga';
import { authWatcher } from './authSagas/authSaga';
import { registrationWatcher } from './authSagas/registrationSaga';

export function* rootSaga() {
  yield all([resetPasswordWatcher(), authWatcher(), registrationWatcher()]);
}
